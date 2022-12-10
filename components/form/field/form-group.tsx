import classes from './Form-group.module.css';

import { NextPage } from "next";
import { PageWithChildren } from '../../../interfaces/page-with-children.interface';

export interface FormGroupProps extends PageWithChildren {
	classNames?: string[];
}

/**
 * Nice display of formgroup
 * Children should put the label below the input for styling reasons
 * @param props React children
 * @returns React node
 */
const FormGroup: NextPage<FormGroupProps> = (props) => {
	const propNames = props.classNames || [];
	const classNameArray = [...propNames, classes.formGroup];
	return (<div className={classNameArray.join(' ')}>{props.children}</div>);
}

export default FormGroup;
