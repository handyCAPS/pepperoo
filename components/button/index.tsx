import classes from "./Button.module.css";

import { NextPage } from "next";
import { PageWithChildren } from "../../interfaces/page-with-children.interface";

export interface ButtonProps extends PageWithChildren {
	type?: "button" | "submit" | "reset";
	theme?: "normal" | "dark" | "light";
	disabled?: boolean;
	clickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: NextPage<ButtonProps> = ({
	children,
	type = "button",
	theme = "normal",
	disabled = false,
	clickHandler,
}) => {
	const buttonClasses = [classes.button];
	if (theme === "dark") {
		buttonClasses.push(classes.dark);
	}
	if (theme === "light") {
		buttonClasses.push(classes.light);
	}
	return (
		<button
			type={type}
			className={buttonClasses.join(" ")}
			disabled={disabled}
			onClick={clickHandler}
		>
			{children}
		</button>
	);
};

export default Button;
