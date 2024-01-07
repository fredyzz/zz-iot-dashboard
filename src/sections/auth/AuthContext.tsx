import { User, UserCredential } from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";

import { signInUser, signOutUser, userStateListener } from "../../firebase";

export interface ContextState {
	currentUser: User | null;
	signIn: ({
		email,
		password,
	}: {
		email: string;
		password: string;
	}) => Promise<UserCredential | null>;
	signOut: () => Promise<void>;
}

export const AuthContext = createContext({} as ContextState);

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [currentUser, setCurrentUser] = useState<User | null>(null);

	const signOut = async () => {
		await signOutUser();
		setCurrentUser(null);
		/////// navigate('/')
	};

	const signIn = async ({ email, password }: { email: string; password: string }) => {
		const userCredentials = await signInUser({ email, password });
		if (userCredentials) {
			setCurrentUser(userCredentials.user);

			return userCredentials;
		}

		return null;
	};

	useEffect(() => {
		const unsubscribe = userStateListener((user) => {
			if (user) {
				setCurrentUser(user);
			}
		});

		return unsubscribe;
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<AuthContext.Provider value={{ currentUser, signIn, signOut }}>{children}</AuthContext.Provider>
	);
};

export const useAuthContext = () => useContext(AuthContext);
