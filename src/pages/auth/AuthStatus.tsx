import { useEffect } from "react";

import { useAuthContext } from "./AuthContext";

export function AuthStatus() {
	const authContext = useAuthContext();
	// eslint-disable-next-line no-console
	console.log(authContext);

	// leopoldo.a.zimperz@gmail.com
	// merda123

	useEffect(() => {
		const signInAndHandleErrors = async () => {
			try {
				await authContext.signIn("leopoldo.a.zimperz@gmail.com", "merda123");
			} catch (error) {
				// Handle error here
			}
		};

		void signInAndHandleErrors();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <div>AuthStatus</div>;
}
