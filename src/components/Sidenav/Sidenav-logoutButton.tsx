import { Button, Flex, Icon, IconButton, Text, Tooltip } from "@chakra-ui/react";
import { MdOutlineLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import { useAuthContext } from "../../contexts/AuthContext";

const BUTTON_LABEL = "Logout";

export function SidenavLogoutButton({ mode }: { mode: "semi" | "over" }) {
	const navigate = useNavigate();
	const { signOut } = useAuthContext();

	const handleOnButtonClick = () => {
		void signOut();
		navigate("/login");
	};

	const logoutButtonInOverMode = () => {
		return (
			<Button
				onClick={handleOnButtonClick}
				_focus={{ bg: "gray.100" }}
				_hover={{
					bg: "gray.200",
				}}
				_activeLink={{ bg: "orange.500", color: "white" }}
				w="full"
				borderRadius="md"
				display="flex"
			>
				<Flex alignItems="center" p={2}>
					<Icon boxSize="5" as={MdOutlineLogout} />
					<Text ml={2}>{BUTTON_LABEL}</Text>
				</Flex>
			</Button>
		);
	};

	const logoutButtonInSemiMode = () => {
		return (
			<Tooltip label={BUTTON_LABEL} placement="right">
				<IconButton
					_focus={{ bg: "gray.100" }}
					_activeLink={{ boxShadow: "md", bg: "orange.500", color: "white" }}
					bg="transparent"
					aria-label={BUTTON_LABEL}
					borderRadius="xl"
					icon={<MdOutlineLogout />}
					onClick={handleOnButtonClick}
				/>
			</Tooltip>
		);
	};

	return mode === "semi" ? logoutButtonInSemiMode() : logoutButtonInOverMode();
}
