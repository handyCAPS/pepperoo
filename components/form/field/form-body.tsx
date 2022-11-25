import classes from "./Form-body.module.css";

import React, { ReactNode } from "react";

export interface FormProps<T extends HTMLFormElement = HTMLFormElement> {
	children?: ReactNode;
	formTitle?: string;
	submitHandler: (event: React.FormEvent<T>) => void;
}

const FormBody = <T extends HTMLFormElement = HTMLFormElement>(
	props: FormProps<T>
) => {
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
