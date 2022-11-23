export type FormValueType = string | number | boolean;

export type InputType = "text" | "checkbox" | "textarea" | "radio" | "select";

export interface FormValueBase<
	T extends InputType = "text",
	V extends FormValueType = string
> {
	type: T;
	name: string;
	label?: string;
	value?: V;
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
