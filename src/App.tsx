import { AuthContextProvider } from "./pages/auth/AuthContext";
import { AuthStatus } from "./pages/auth/AuthStatus";

export function App() {
	return (
		<AuthContextProvider>
			<div className="App">
				<h1>ZZ Iot Dashboard</h1>
				<AuthStatus />
			</div>
		</AuthContextProvider>
	);
}
