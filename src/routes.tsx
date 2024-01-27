import { IconType } from "react-icons";
import { FiSettings } from "react-icons/fi";
import { ImUnlocked } from "react-icons/im";
import { MdDashboard } from "react-icons/md";
import { Navigate, RouteObject } from "react-router-dom";

import { LoginPage } from "./pages/auth/LoginPage";
import { DashboardPage } from "./pages/dashboard";
import { SettingsPage } from "./pages/settings";

export interface routes {
	icon?: IconType;
	label: string;
	path: string;
	element: React.ReactNode;
	type: "public" | "private";
	notVisible?: boolean;
}

// Add here new routes
export const routesConfig: routes[] = [
	{ path: "/", element: <DashboardPage />, type: "private", label: "Dashboard", icon: MdDashboard },
	{
		path: "/settings",
		element: <SettingsPage />,
		type: "private",
		label: "Settings",
		icon: FiSettings,
	},
	{ path: "/login", element: <LoginPage />, type: "public", label: "Login", icon: ImUnlocked },
	{
		path: "*",
		element: <Navigate to="/login" replace />,
		type: "public",
		notVisible: true,
		label: "Default",
	},
];

export const privateRoutes = (): RouteObject[] =>
	routesConfig
		.filter((route) => route.type === "private")
		.map((route) => ({ path: route.path, element: route.element }));

export const publicRoutes = (): RouteObject[] =>
	routesConfig
		.filter((route) => route.type === "public")
		.map((route) => ({ path: route.path, element: route.element }));
