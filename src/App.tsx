import "@fontsource/open-sans";

import { ChakraProvider } from "@chakra-ui/react";
import { Router } from "components/Router";

import { AuthContextProvider } from "./contexts/AuthContext";

export function App() {
	return (
		<ChakraProvider>
			<AuthContextProvider>
				<Router />
			</AuthContextProvider>
		</ChakraProvider>
	);
}
