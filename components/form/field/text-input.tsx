import classes from "./Text-input.module.css";

import { NextPage } from "next";
import { FormItem } from "../interfaces/formvalues.interface";
import FormGroup from "./form-group";

export interface TextInputProps extends FormItem<'text', string> {
	name: string;
};

const TextInput: NextPage<TextInputProps> = (props) => {
	let label = props.label;
	const { name, value } = props;
	if (!label) {
		label = name;
	}
	return (
		<FormGroup>
			<input className={classes.input} type="text" name={name} id={name} value={value} />
			<label className={classes.label} htmlFor={name}>{label}</label>
		</FormGroup>
	);
};

export default TextInput;
