import { useUsersContext } from "./Context";
import styles from "./UserCreateMagicButton.module.scss";

const NAMES_LIST = ["John", "Jane", "Mary", "Peter", "Paul", "Mark", "Luke", "Matthew"];

const UserCreateMagicButton = () => {
	const { createUser } = useUsersContext();

	const generateRandomName = () => {
		// returns a name picked randomly from a list of names
		return NAMES_LIST[Math.floor(Math.random() * NAMES_LIST.length)];
	};

	const handleCreateUser = () => {
		const randomName = generateRandomName(); // Replace with your logic to generate a random name
		void createUser({ name: randomName });
	};

	return (
		<button className={styles.userCreateMagicButton} onClick={handleCreateUser}>
			Create User
		</button>
	);
};

export default UserCreateMagicButton;
