import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

import styles from "./Sidebar.module.css";

export function SideBar() {
	return (
		<div className={styles.sidebar}>
			<Sidebar>
				<Menu>
					<SubMenu label="Charts">
						<MenuItem> Pie charts </MenuItem>
						<MenuItem> Line charts </MenuItem>
					</SubMenu>
					<MenuItem> Documentation </MenuItem>
					<MenuItem> Calendar </MenuItem>
				</Menu>
			</Sidebar>
		</div>
	);
}
