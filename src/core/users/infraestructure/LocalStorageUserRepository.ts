import { User } from "../domain/User";
import { UserRepository } from "../domain/UserRepository";

const USERS_STORAGE_KEY = "users";

export function createLocalStorageUserRepository(): UserRepository {
	return {
		get,
		getAll,
		save,
	};
}

async function get(id: string) {
	const users = getAllFromLocalStorage();
	const user = users.get(id);

	if (!user) {
		return Promise.resolve(null);
	}

	return Promise.resolve(user);
}

async function getAll() {
	const users = getAllFromLocalStorage();

	return Promise.resolve(Array.from(users.values()));
}

function save(user: User) {
	const users = getAllFromLocalStorage();

	users.set(user.id, user);
	localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(Array.from(users.entries())));
}

function getAllFromLocalStorage(): Map<string, User> {
	const users = localStorage.getItem(USERS_STORAGE_KEY);

	if (users === null) {
		return new Map();
	}

	const map = new Map(JSON.parse(users) as Iterable<[string, User]>);

	return map;
}
