import {
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	Icon,
	VStack,
} from "@chakra-ui/react";
import React from "react";
import { SiWwise } from "react-icons/si";

import { useSidenav } from "./Sidenav-context";
import SidenavItems, { SidenavItem } from "./Sidenav-items";

export interface SidenavProps {
	navItems: SidenavItem[];
}

export function Sidenav({ navItems }: SidenavProps) {
	const { isOpen, onClose } = useSidenav();

	return (
		<React.Fragment>
			<VStack spacing="5" as="nav" display={{ base: "none", md: "flex" }}>
				<Icon as={SiWwise} boxSize={8} /> {/*OR PUT YOUR LOGO HERE */}
				<SidenavItems navItems={navItems} />
			</VStack>
			<Drawer placement="left" onClose={onClose} isOpen={isOpen}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>Sidenav Header</DrawerHeader>
					<DrawerBody>
						<SidenavItems navItems={navItems} mode="over" />
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</React.Fragment>
	);
}

export default Sidenav;
