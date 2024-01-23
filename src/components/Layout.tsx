import { Header } from "./Header";
import styles from "./Layout.module.css";
import { SideBar } from "./Sidebar";

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className={styles.layout}>
			<Header />
			<SideBar />
			<div className={styles.content}>{children}</div>
		</div>
	);
}
