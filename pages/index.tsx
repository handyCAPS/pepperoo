import classes from './Home.module.css';

import { NextPage } from "next";
import Head from "next/head";
import Image, { ImageLoaderProps } from "next/image";
import { Fragment } from "react";
import PepperList from "./pepper-list";

const imgLoader  = ({src, width, quality}: ImageLoaderProps) => {
	return `${src}`;
}

// import pepper from '../public/JamWax2.jpg';
// const pepper = require('../public/images/JamWax2.jpg');

const Home: NextPage = () => {
	return (
		<Fragment>
			<Head>
				<title>Pepper Tracker</title>
			</Head>
			<PepperList></PepperList>
			<div className={classes.imageWrap}>
				{/* <Image src={pepper} alt="" fill={true}/> */}
				<Image loader={imgLoader} src='/JamWax2.jpg' alt="Vercel Logo" fill={true} />
			</div>
		</Fragment>
	);
};

export default Home;
