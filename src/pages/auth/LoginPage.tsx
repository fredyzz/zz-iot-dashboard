import { LoginForm } from "components/LoginForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "services/auth/types";

import { useAuthContext } from "../../contexts/AuthContext";
import styles from "./LoginPage.module.scss";

export function LoginPage() {
	const navigate = useNavigate();
	const authContext = useAuthContext();
	const [error, setError] = useState<string | null>(null);

	const onSignInWithCredentials = async (email: string, password: string): Promise<User | null> => {
		try {
			const user = await authContext.signIn(email, password);

			if (user) {
				navigate("/");
			}

			return null;
		} catch (error: unknown) {
			setError(error instanceof Error ? error.message : String(error));
			console.log(error); // eslint-disable-line no-console

			return null;
		}
	};

	return (
		<div className={styles.loginPage}>
			<LoginForm onSignInWithCredentials={onSignInWithCredentials} error={error} />
		</div>
	);
}
