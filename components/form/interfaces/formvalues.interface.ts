export type FormValueType = string | number | boolean;

export type InputType = "text" | "checkbox" | "textarea" | "radio" | "select";

export interface FormValueBase<
	Type extends InputType = "text",
	Value extends FormValueType = string
> {
	type: Type;
	name?: string;
	label?: string;
	value?: Value;
	required?: boolean;
	pattern?: string;
}

export interface FormOption {
	label: string;
	value?: string;
}

export interface FormItem<
	T extends InputType = "text",
	V extends FormValueType = string
> extends FormValueBase<T, V> {
	options?: FormOption[];
}

export type FormValues<
	K extends string,
	T extends InputType = 'text',
	V extends FormValueType = string
> = {
	[key in K]: FormItem<T, V>;
};

/**
 * Use this to create custom form collections
 */
export interface CustomFormElements<
	T extends HTMLFormControlsCollection = HTMLFormControlsCollection
> extends HTMLFormElement {
	readonly elements: T;
}
