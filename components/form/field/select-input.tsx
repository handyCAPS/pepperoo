import { NextPage } from "next";
import { FormItem, FormOption } from "../interfaces/formvalues.interface";
import FormGroup from "./form-group";

export interface SelectInputProps extends FormItem<"select", string> {
	options: FormOption[];
}

const SelectInput: NextPage<SelectInputProps> = (props) => {
	const { name, options, value } = props;
	return (
		<FormGroup>
			<select id={name} name={name} value={value}>
				{options.map((option, index) => (
					<option key={index} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
			<label htmlFor={name}>{name}</label>
		</FormGroup>
	);
};

export default SelectInput;
