import { createLocalStorageUserRepository } from "./core/users/infraestructure/LocalStorageUserRepository";
import { UsersContextProvider } from "./sections/users/Context";
import UserCreateMagicButton from "./sections/users/UserCreateMagicButton";
import { UserList } from "./sections/users/UserList";

export function App() {
	const usersRepository = createLocalStorageUserRepository();

	return (
		<UsersContextProvider repository={usersRepository}>
			<div className="App">
				<h1>React template - Typescript, Hexagonal Architecture & DDD</h1>
				<h2>Current users</h2>
				<UserCreateMagicButton />
				<UserList />
			</div>
		</UsersContextProvider>
	);
}
