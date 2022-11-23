import {
	InputType,
	FormItem,
	FormValues,
	FormValueType,
} from "../../components/form/interfaces/formvalues.interface";

export type PepperFormFields =
	| "name"
	| "color"
	| "cross"
	| "fNumber"
	| "heatLevel"
	| "yearsGrowing"
	| "remarks"
	| "currentlyGrowing";

const PepperFormValues: FormValues<PepperFormFields, InputType, FormValueType> =
	{
		name: {
			type: "text",
			label: "Name",
		},
		color: {
			type: "text",
			label: "Color",
		},
		cross: {
			type: "text",
			label: "Cross",
		},
		fNumber: {
			type: "text",
			label: "F Number",
		},
		heatLevel: {
			type: "text",
			label: "Heat level",
		},
		yearsGrowing: {
			type: "text",
			label: "Years growing",
		},
		remarks: {
			type: "textarea",
			label: "Remarks",
		} as FormItem<"textarea">,
		currentlyGrowing: {
			type: "text",
			label: "Currently growing",
		},
	};
export default PepperFormValues;
