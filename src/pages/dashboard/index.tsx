import { Layout } from "components/Layout";
import { useAuthContext } from "pages/auth/AuthContext";

export function DashboardPage() {
	const { currentUser } = useAuthContext();

	return (
		<Layout>
			<h1>Dashboard</h1>
			<h2>User information:</h2>
			<p>Display Name: {currentUser?.displayName}</p>
			<p>Email: {currentUser?.email}</p>
		</Layout>
	);
}
