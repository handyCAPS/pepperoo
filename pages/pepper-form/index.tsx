import classes from "./PepperForm.module.css";

import { NextPage } from "next";
import { FormEvent } from "react";
import FormBody from "../../components/form/field/form-body";
import TextInput, {
	TextInputProps,
} from "../../components/form/field/text-input";
import {
	FormItem,
	FormValueType,
	InputType,
} from "../../components/form/interfaces/formvalues.interface";
import PepperFormValues, { PepperFormFields } from "./pepper-form-values";

const pepperFormValues2: FormItem<InputType, FormValueType>[] = [
	{
		type: "text",
		name: "Number",
	},
	{
		type: "text",
		name: "Name",
	},
	{
		type: "text",
		name: "Color",
	},
	{
		type: "checkbox",
		name: "Cross",
	} as FormItem<"checkbox", boolean>,
	{
		type: "select",
		name: "Heat level",
	} as FormItem<"select">,
	{
		type: "text",
		name: "Years in garden",
	},
	{
		type: "text",
		name: "Currently growing",
	},
	{
		type: "textarea",
		name: "Remarks",
	} as FormItem<"textarea">,
];
const PepperForm: NextPage = () => {
	const handleSubmit = (event: FormEvent) => {};
	return (
		<div className={classes.pepperForm}>
			<FormBody submitHandler={handleSubmit}>
				{Object.keys(PepperFormValues).map((formKey, index) => {
					const formItem = {
						...PepperFormValues[formKey as PepperFormFields],
						name: formKey,
					};
					switch (formItem.type) {
						case "text":
							const textItem = { ...formItem } as TextInputProps;
							return <TextInput {...textItem} key={index}></TextInput> ;
					}
				})}
			</FormBody>
		</div>
	);
};

export default PepperForm;
