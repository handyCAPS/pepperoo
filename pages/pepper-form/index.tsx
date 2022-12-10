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
import { Pepper } from "../../interfaces/pepper.interface";

export interface PepperFormProps {
	pepper?: Pepper;
};

const PepperForm: NextPage<PepperFormProps> = (props) => {
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

		const pepperValues: Pepper = {
			id: props.pepper?.id,
			name: name.value,
			color: color.value,
			cross: cross.checked,
			fNumber: parseInt(fNumber.value) || 0,
			heatLevel: heatLevel.value,
			yearsGrowing: parseInt(yearsGrowing.value) || 0,
			remarks: remarks.value,
			currentlyGrowing: parseInt(currentlyGrowing.value) || 0,
		};

		console.log("WE have a submit!", pepperValues);
	};
	const formProps: FormProps<PepperFormElement> = {
		// formTitle: "Add Pepper",
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
							return <TextInput {...textItem} key={index} />;
						case "textarea":
							const textAreaItem = { ...formItem, textArea: true } as any;
							return <TextInput {...textAreaItem} key={index} />;
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
