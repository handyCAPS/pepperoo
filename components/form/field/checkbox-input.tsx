import classes from './CheckboxInput.module.css';

import { NextPage } from "next";
import { useState } from "react";
import { FormItem } from "../interfaces/formvalues.interface";
import FormGroup from "./form-group";

export interface CheckboxInputProps extends FormItem<"checkbox", boolean> {
	name: string;
	selectionChange: (checked: boolean) => void;
}

const CheckboxInput: NextPage<CheckboxInputProps> = ({
	name = "checkbox",
	value = false,
	selectionChange = (e) => {},
}) => {
	const [isSelected, setSelection] = useState(!!value);
	const handleSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
		const isChecked = event.target.checked;
		setSelection(isChecked);
		selectionChange(isChecked);
	};
	return (
		<FormGroup>
			<input
				type="checkbox"
				name={name}
				id={name}
				defaultChecked={isSelected}
				onChange={handleSelection}
				className={classes.checkboxInput}
			/>
			<label htmlFor={name}>{name}</label>
		</FormGroup>
	);
};

export default CheckboxInput;
