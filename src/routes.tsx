import { Navigate, RouteObject } from "react-router-dom";

import { LoginPage } from "./pages/auth/LoginPage";
import { DashboardPage } from "./pages/dashboard";
import { SensorsPage } from "./pages/sensors";

export function privateRoutes(): RouteObject[] {
	return [
		{ path: "/", element: <DashboardPage /> },
		{ path: "/sensors", element: <SensorsPage /> },
	];
}

export function publicRoutes(): RouteObject[] {
	return [
		{ path: "/login", element: <LoginPage /> },
		{ path: "*", element: <Navigate to="/login" replace /> },
	];
}
