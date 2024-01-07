import { User } from "../../domain/User";
import { UserRepository } from "../../domain/UserRepository";

export function createUser(userRepository: UserRepository, user: User): void {
	userRepository.save(user);
}
