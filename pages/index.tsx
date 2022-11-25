import { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";
import PepperList from "./pepper-list";

const Home: NextPage = () => {
	return (
		<Fragment>
			<Head>
				<title>Pepper Tracker</title>
			</Head>
			<PepperList></PepperList>
		</Fragment>
	);
};

export default Home;
