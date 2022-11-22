import classes from "./Navbar.module.css";

import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

export interface NavBarItem {
	label: string;
	link: string;
	title?: string;
}

export interface NavBarProps {
	items: NavBarItem[];
}

const NavBar: NextPage<NavBarProps> = (props) => {
	const router = useRouter();
	return (
		<nav className={classes.navbar}>
			{props.items.map((item, key) => {
				const itemClassNames = [classes.navbarItem];
				if (router.asPath === item.link) {
					itemClassNames.push(classes.active)
				}
				return (
					<div className={itemClassNames.join(" ")} key={key}>
						<Link href={item.link}>{item.label}</Link>
					</div>
				);
			})}
		</nav>
	);
};

export default NavBar;
