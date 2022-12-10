import classes from "./Text-input.module.css";

import { NextPage } from "next";
import { FormItem } from "../interfaces/formvalues.interface";
import FormGroup from "./form-group";

export interface TextInputProps extends FormItem<"text", string> {
	name: string;
	textArea?: boolean;
}

const TextInput: NextPage<TextInputProps> = (props) => {
	let label = props.label;
	const { name, value, textArea } = props;
	if (!label) {
		label = name;
	}
	const attributes = {
		className: classes.input,
		id: name,
		type: "text",
		value,
		name,
	};
	let input = <input {...attributes} />;
	if (textArea) {
		attributes.type = "textarea";
		input = <textarea {...attributes} />;
	}
	return (
		<FormGroup>
			{input}
			<label className={classes.label} htmlFor={name}>
				{label}
			</label>
		</FormGroup>
	);
};

export default TextInput;
