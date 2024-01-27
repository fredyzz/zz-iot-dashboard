import { LoginForm } from "components/LoginForm";
import { useEffect } from "react";

import { useAuthContext } from "../../contexts/AuthContext";
import styles from "./LoginPage.module.css";

export function LoginPage() {
	const authContext = useAuthContext();
	// eslint-disable-next-line no-console
	console.log("authContext", authContext);

	useEffect(() => {
		const signInAndHandleErrors = async () => {
			try {
				await authContext.signIn(
					process.env.REACT_APP_TEST_USER_EMAIL ?? "",
					process.env.REACT_APP_TEST_USER_PASSWORD ?? "",
				);
			} catch (error) {
				// Handle error here
			}
		};

		void signInAndHandleErrors();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className={styles.loginPage}>
			<h1>LoginPage</h1>
			<LoginForm />
		</div>
	);
}
