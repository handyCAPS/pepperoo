import classes from "./PepperForm.module.css";

import { NextPage } from "next";
import React from "react";
import FormBody, { FormProps } from "../../components/form/field/form-body";
import TextInput, {
	TextInputProps,
} from "../../components/form/field/text-input";
import PepperFormValues, {
	PepperFormElement,
	PepperFormFields,
} from "./pepper-form-values";
import Button from "../../components/button";
import CheckboxInput, {
	CheckboxInputProps,
} from "../../components/form/field/checkbox-input";

const handleSubmit = (event: React.FormEvent<PepperFormElement>) => {
	event.preventDefault();

	const {
		name,
		color,
		cross,
		fNumber,
		heatLevel,
		yearsGrowing,
		remarks,
		currentlyGrowing,
	} = event.currentTarget.elements;

	console.log("WE have a submit!");
};
const PepperForm: NextPage = () => {
	const formProps: FormProps<PepperFormElement> = {
		formTitle: "Add Pepper",
		submitHandler: handleSubmit,
	};
	return (
		<div className={classes.pepperForm}>
			<FormBody {...formProps}>
				{Object.keys(PepperFormValues).map((formKey, index) => {
					const formItem = {
						...PepperFormValues[formKey as PepperFormFields],
						name: formKey,
					};
					switch (formItem.type) {
						case "text":
							const textItem = { ...formItem } as TextInputProps;
							return <TextInput {...textItem} key={index}></TextInput>;
						case "checkbox":
							const checkboxItem = { ...formItem } as CheckboxInputProps;
							return <CheckboxInput {...checkboxItem} key={index} />;
					}
				})}
				<footer className={classes.formFooter}>
					<Button type="submit">Submit</Button>
				</footer>
			</FormBody>
		</div>
	);
};

export default PepperForm;
