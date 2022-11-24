import classes from "./PepperForm.module.css";

import { NextPage } from "next";
import React from "react";
import FormBody from "../../components/form/field/form-body";
import TextInput, {
	TextInputProps,
} from "../../components/form/field/text-input";
import PepperFormValues, { PepperFormFields } from "./pepper-form-values";
import Button from "../../components/button";

const PepperForm: NextPage = () => {
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log('WE have a submit!');
	};
	return (
		<div className={classes.pepperForm}>
			<FormBody submitHandler={handleSubmit} formTitle="Add Pepper">
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
				<footer className={classes.formFooter}><Button type="submit">Submit</Button></footer>
			</FormBody>
		</div>
	);
};

export default PepperForm;
