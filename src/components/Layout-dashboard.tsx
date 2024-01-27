import { routesConfig } from "routes";

import { Navbar } from "./Navbar";
import { Sidenav, SidenavContainer, SidenavItem, SidenavProvider } from "./Sidenav";

export function LayoutDashboard({ children }: { children: React.ReactNode }) {
	const navItems: SidenavItem[] = routesConfig
		.filter((route) => route.type === "private")
		.map((route) => ({ label: route.label, icon: route.icon, to: route.path }));

	return (
		<SidenavProvider>
			<SidenavContainer sidenav={<Sidenav navItems={navItems} />}>
				<main>
					<div className="App">
						<Navbar />
						{children}
					</div>
				</main>
			</SidenavContainer>
		</SidenavProvider>
	);
}
