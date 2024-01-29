import {
	Button,
	Center,
	Divider,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Heading,
	Input,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { User } from "services/auth/types";

import styles from "./LoginForm.module.scss";

export function LoginForm({
	error,
	onSignInWithCredentials,
	onSignInWithGoogle,
}: {
	error: string | null;
	onSignInWithCredentials: (email: string, password: string) => Promise<User | null>;
	onSignInWithGoogle?: () => Promise<void>;
}) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);

	const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	};

	const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
	};

	const handleOnSignIntWithUserAndPassword = () => {
		if (!isSubmitEnabled) {
			return;
		}

		try {
			void onSignInWithCredentials(email, password);
		} catch (error) {
			console.log(error); // eslint-disable-line no-console
		}
	};

	useEffect(() => {
		if (email && password) {
			setIsSubmitEnabled(true);
		}
	}, [email, password]);

	return (
		<div className={styles.loginForm}>
			<div className={styles.passwordSignIn}>
				<Heading size="xl" marginBottom="24px">
					Sign In
				</Heading>
				<FormControl isInvalid={Boolean(error)} isRequired>
					<FormLabel>Login with user and password</FormLabel>
					<Input type="email" value={email} onChange={handleChangeEmail} placeholder="Email" />
					{Boolean(error) && <FormErrorMessage>Email is required.</FormErrorMessage>}
				</FormControl>
				<FormControl isInvalid={Boolean(error)} isRequired>
					<Input
						type="password"
						value={password}
						onChange={handleChangePassword}
						placeholder="Password"
						marginTop="16px"
					/>
					{Boolean(error) && <FormErrorMessage>Password is required.</FormErrorMessage>}
				</FormControl>
				<Button
					colorScheme="blue"
					marginTop="16px"
					onClick={handleOnSignIntWithUserAndPassword}
					isDisabled={!isSubmitEnabled}
				>
					Sign in
				</Button>
			</div>

			{Boolean(onSignInWithGoogle) && (
				<>
					<Center height="50px">
						<Divider orientation="horizontal" />
					</Center>
					<div className={styles.socialSignIn}>
						<Heading size="md">Social login</Heading>
						<Button
							colorScheme="red"
							leftIcon={<FaGoogle />}
							marginTop="24px"
							onClick={onSignInWithGoogle}
						>
							Google
						</Button>
					</div>
				</>
			)}
		</div>
	);
}
