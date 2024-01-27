import { IconButton } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";

import { useSidenav } from "./Sidenav";

export function Navbar() {
	const { onOpen } = useSidenav();

	return (
		<IconButton
			aria-label="menu"
			display={{ base: "flex", md: "none" }}
			onClick={onOpen}
			icon={<FiMenu />}
		/>
	);
}
