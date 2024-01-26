import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { privateRoutes, publicRoutes } from "routes";

import { useAuthContext } from "../pages/auth/AuthContext";

export function Router() {
	const { currentUser, loading } = useAuthContext();
	const [router, setRouter] = useState<ReturnType<typeof createBrowserRouter> | null>(null);

	useEffect(() => {
		if (!loading) {
			const newRouter = createBrowserRouter([
				...(currentUser ? privateRoutes() : []),
				...publicRoutes(),
			]);
			setRouter(newRouter);
		}
	}, [currentUser, loading]);

	if (loading) {
		return <div>Loading...</div>; // replace with loading component
	}

	return router ? <RouterProvider router={router} /> : null;
}
