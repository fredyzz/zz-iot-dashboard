import { Router } from "components/Router";

import { AuthContextProvider } from "./pages/auth/AuthContext";

export function App() {
	return (
		<AuthContextProvider>
			<Router />
		</AuthContextProvider>
	);
}
