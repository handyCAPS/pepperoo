import '../styles/root.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import PepperBody from '../components/layout/body/body';
import { Fragment } from 'react';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
			<Head>
				<title>Pepperoo</title>
			</Head>
			<PepperBody>
				<Component {...pageProps} />
			</PepperBody>
		</Fragment>
  );
}
