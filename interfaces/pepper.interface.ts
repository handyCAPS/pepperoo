import { PepperFormFields } from "../pages/pepper-form/pepper-form-values";

export type PepperBase = {
	[key in PepperFormFields]?: any;
};

export interface Pepper extends PepperBase {
	id?: string;
	name: string;
	color: string;
	cross?: boolean;
	heatLevel: string;
	fNumber?: number;
	yearsGrowing?: number;
	currentlyGrowing?: number;
}
