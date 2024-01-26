import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";

import styles from "./Sidebar.module.css";

export function SideBar() {
	return (
		<div className={styles.sidebar}>
			<Sidebar>
				<Menu>
					<MenuItem component={<Link to="/" />}> Dashboard</MenuItem>
					<MenuItem component={<Link to="/sensors" />}> Sensors</MenuItem>
					<MenuItem component={<Link to="/login" />}> Login</MenuItem>
					<SubMenu label="Charts">
						<MenuItem> Pie charts </MenuItem>
						<MenuItem> Line charts </MenuItem>
					</SubMenu>
				</Menu>
			</Sidebar>
		</div>
	);
}
