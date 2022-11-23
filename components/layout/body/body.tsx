import classes from "./Body.module.css";

import NavBar, { NavBarItem } from "../nav/navbar";
import PageTitle from "./page-title";
import { NextPage } from "next";
import { ReactNode } from "react";

const pageItems: NavBarItem[] = [
	{
		label: "Home",
		link: "/",
	},
	{
		label: "All peppers",
		link: "/pepper-list",
	},
	{
		label: "Add pepper",
		link: "/pepper-form",
	},
];

const PepperBody: NextPage<{ children: ReactNode }> = (props) => {
	return (
		<div className={classes.outer}>
			<NavBar items={pageItems}></NavBar>
			<PageTitle titleText="Pepperoo"></PageTitle>
			<div className={classes.inner}>{props.children}</div>
		</div>
	);
};

export default PepperBody;
