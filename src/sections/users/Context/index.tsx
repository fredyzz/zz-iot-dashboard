import React, { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { createUser } from "../../../core/users/application/create/createUser";
import { getAllUsers } from "../../../core/users/application/getAll/getAllUsers";
import { User } from "../../../core/users/domain/User";
import { UserRepository } from "../../../core/users/domain/UserRepository";

export interface ContextState {
	users: User[];
	createUser: (user: { name: string }) => Promise<void>;
}

export const UsersContext = createContext({} as ContextState);

export const UsersContextProvider = ({
	children,
	repository,
}: React.PropsWithChildren<{ repository: UserRepository }>) => {
	const [users, setUsers] = useState<User[]>([]);

	async function create({ name }: { name: string }) {
		const id = (uuidv4 as () => string)();

		createUser(repository, { id, name });
		await getUsers();
	}

	async function getUsers() {
		return getAllUsers(repository).then((users) => {
			setUsers(users);
		});
	}

	useEffect(() => {
		void getUsers();
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<UsersContext.Provider value={{ users, createUser: create }}>{children}</UsersContext.Provider>
	);
};

export const useUsersContext = () => useContext(UsersContext);
