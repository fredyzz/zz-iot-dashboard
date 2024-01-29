import { LoginForm } from "components/LoginForm";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuthContext } from "../../contexts/AuthContext";
import styles from "./LoginPage.module.scss";

export function LoginPage() {
	const navigate = useNavigate();
	const { currentUser, signIn } = useAuthContext();
	const [error, setError] = useState<string | null>(null);

	const onSignInWithCredentials = (email: string, password: string): void => {
		try {
			void signIn(email, password);
		} catch (error: unknown) {
			setError(error instanceof Error ? error.message : String(error));
			console.log(error); // eslint-disable-line no-console
		}
	};

	useEffect(() => {
		if (currentUser) {
			navigate("/");
		}
	}, [currentUser, navigate]);

	return (
		<div className={styles.loginPage}>
			<LoginForm onSignInWithCredentials={onSignInWithCredentials} error={error} />
		</div>
	);
}
