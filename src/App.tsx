import { Layout } from "components/Layout";

import { AuthContextProvider } from "./pages/auth/AuthContext";
import { AuthStatus } from "./pages/auth/AuthStatus";

export function App() {
	return (
		<AuthContextProvider>
			<Layout>
				<h1>ZZ Iot Dashboard</h1>
				<AuthStatus />
			</Layout>
		</AuthContextProvider>
	);
}
