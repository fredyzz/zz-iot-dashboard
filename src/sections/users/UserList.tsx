import { UserCard } from "./UserCard";
import styles from "./UserList.module.scss";
import { useUsersContext } from "./UsersContext";

export function UserList() {
	const { users } = useUsersContext();

	return (
		<div className={styles.userList}>
			{users.map((user) => (
				<UserCard key={user.name} user={user} />
			))}
		</div>
	);
}
