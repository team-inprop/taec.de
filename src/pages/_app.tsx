import type { AppProps } from "next/app";
import Head from "next/head";
import "../app/globals.css";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<title>TAEC - Digitale Baubeschaffung</title>
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp;
