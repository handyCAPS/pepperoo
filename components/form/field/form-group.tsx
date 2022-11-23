import classes from './Form-group.module.css';

import { NextPage } from "next";
import { ReactNode } from "react";

/**
 * Nice display of formgroup
 * Children should put the label below the input for styling reasons
 * @param props React children
 * @returns React node
 */
const FormGroup: NextPage<{children: ReactNode}> = (props) => {
	return (<div className={classes.formGroup}>{props.children}</div>);
}

export default FormGroup;
