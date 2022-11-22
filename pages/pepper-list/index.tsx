import { NextPage } from "next";
import Link from "next/link";

const PepperList: NextPage = () => {
	return (
		<div>
			List of <Link href={'/'}>peppers</Link> baby!
		</div>
	);
};

export default PepperList;
