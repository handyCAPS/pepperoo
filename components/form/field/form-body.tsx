import classes from "./Form-body.module.css";

import { NextPage } from "next";
import React, { ReactNode } from "react";

const FormBody: NextPage<{
	children: ReactNode;
	formTitle?: string;
	submitHandler: (event: React.FormEvent<HTMLFormElement>) => void;
}> = (props) => {
	return (
		<form onSubmit={props.submitHandler} className={classes.formBody}>
			{props.formTitle && (
				<h4 className={classes.formTitle}>{props.formTitle}</h4>
			)}
			{props.children}
		</form>
	);
};

export default FormBody;
