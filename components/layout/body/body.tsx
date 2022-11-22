import classes from "./Body.module.css";

import NavBar, { NavBarItem } from "../nav/navbar";
import PageTitle from "./page-title";

const pageItems: NavBarItem[] = [
	{
		label: "Home",
		link: "/",
	},
	{
		label: "pepper-list",
		link: "/pepper-list",
	},
];

export default function PepperBody(props: any) {
	return (
		<div className={classes.outer}>
			<NavBar items={pageItems}></NavBar>
			<PageTitle titleText="Pepperoo"></PageTitle>
			<div className={classes.inner}>{props.children}</div>
		</div>
	);
}
