import {
	InputType,
	FormItem,
	FormValues,
	FormValueType,
	CustomFormElements,
	FormOption,
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

type PepperFormKeyedElements = HTMLFormControlsCollection & {
	[key in PepperFormFields]: HTMLInputElement;
};

interface PepperFormElements extends HTMLFormControlsCollection {
	name: HTMLInputElement;
	color: HTMLInputElement;
	cross: HTMLInputElement;
	fNumber: HTMLInputElement;
	heatLevel: HTMLInputElement;
	yearsGrowing: HTMLInputElement;
	remarks: HTMLInputElement;
	currentlyGrowing: HTMLInputElement;
}
/**
 * Use this interface as the return type in pepperform submit event
 */
export interface PepperFormElement
	extends CustomFormElements<PepperFormElements> {}

const heatLevels = [
	"None (0 - 2500 su)",
	"Mild (2500 - 30.000 su)",
	"Medium (30.000 - 100.000 su)",
	"Hot (100.000 - 400.000 su)",
	"Super Hot (400.000+ su)",
];

const heatLevelOptions: FormOption<number>[] = heatLevels.map(
	(level, index) => ({ label: level, value: index })
);

const fNumbers = ["Stable", "F1", "F2", "F3", "F4", "F5", "F6", "F7"];

const fNumberOptions: FormOption<number>[] = fNumbers.map((num, index) => ({
	label: num,
	value: index,
}));

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
			type: "checkbox",
			label: "Cross",
		} as FormItem<"checkbox">,
		fNumber: {
			type: "select",
			label: "F Number",
			options: fNumberOptions,
			value: 0,
		} as FormItem<"select", number>,
		heatLevel: {
			type: "select",
			label: "Heat level",
			options: heatLevelOptions,
			value: 3,
		} as FormItem<"select", number>,
		yearsGrowing: {
			type: "text",
			label: "Years growing",
		},
		currentlyGrowing: {
			type: "text",
			label: "Currently growing",
		},
		remarks: {
			type: "textarea",
			label: "Remarks",
		} as FormItem<"textarea">,
	};

export default PepperFormValues;
