import Container from "@mui/material/Container";
import Dashboard from "pages/dashboard";

import { AuthContextProvider } from "./pages/auth/AuthContext";

export function App() {
	return (
		<AuthContextProvider>
			<Container maxWidth="lg">
				<Dashboard />
			</Container>
		</AuthContextProvider>
	);
}
