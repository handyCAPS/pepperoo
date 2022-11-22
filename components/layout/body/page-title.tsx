import classes from "./PageTitle.module.css";

import { NextPage } from "next";

const PageTitle: NextPage<{ titleText: string }> = (props) => {
	return <h1 className={classes.pageTitle}>{props.titleText}</h1>;
};

export default PageTitle;
