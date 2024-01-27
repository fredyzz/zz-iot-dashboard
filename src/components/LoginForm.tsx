import { Button, Center, Divider, Heading, Input } from "@chakra-ui/react";
import { FaGoogle } from "react-icons/fa";

import styles from "./LoginForm.module.css";

export function LoginForm() {
	return (
		<div className={styles.loginForm}>
			<div className={styles.passwordSignIn}>
				<Heading>Login with user and password</Heading>
				<Input placeholder="Email" />
				<Input placeholder="Password" />
				<Button colorScheme="blue">Sign in</Button>
			</div>
			<Center height="50px">
				<Divider orientation="horizontal" />
			</Center>
			<div className={styles.socialSignIn}>
				<Heading>Social login</Heading>
				<Button colorScheme="red" leftIcon={<FaGoogle />}>
					Google
				</Button>
			</div>
		</div>
	);
}
