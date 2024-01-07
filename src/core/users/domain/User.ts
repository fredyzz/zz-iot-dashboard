import { isUserIdValid, UserIdNotValidError } from "./UserId";
import { isUserNameValid, UserNameNotValidError } from "./UserName";

export interface User {
	id: string;
	name: string;
}

export function CheckUserIsValid({ id, name }: User): void {
	if (!isUserIdValid(id)) {
		throw UserIdNotValidError(id);
	}

	if (!isUserNameValid(name)) {
		throw UserNameNotValidError(name);
	}
}
