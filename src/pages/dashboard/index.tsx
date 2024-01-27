import { LayoutDashboard } from "components/Layout-dashboard";
import { useAuthContext } from "contexts/AuthContext";

export function DashboardPage() {
	const { currentUser } = useAuthContext();

	return (
		<LayoutDashboard>
			<h1>Dashboard</h1>
			<h2>User information:</h2>
			<p>Display Name: {currentUser?.displayName}</p>
			<p>Email: {currentUser?.email}</p>
		</LayoutDashboard>
	);
}
