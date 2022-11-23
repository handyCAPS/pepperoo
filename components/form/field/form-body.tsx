import classes from "./Form-body.module.css";

import { NextPage } from "next";
import { FormEvent, ReactNode } from "react";

const FormBody: NextPage<{
	children: ReactNode;
	submitHandler: (event: FormEvent) => void;
}> = (props) => {
	return (
		<form onSubmit={props.submitHandler} className={classes.formBody}>
			{props.children}
		</form>
	);
};

export default FormBody;
