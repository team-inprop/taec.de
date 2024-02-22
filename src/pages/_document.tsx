import { Html, Head, Main, NextScript } from "next/document";

const MyDocument: React.FC = () => {
    return (
        <Html lang="de" dir="ltr">
            <Head>
				<meta property="og:site_name" content="TAEC"/>
				<meta property="og:description" content="Wir bringen das BIM-Modell auf die Baustelle! Erfahren Sie, wie wir Prozesse und Liefertermine mit Ihrem Modell verknüpfen."/>
				<meta property="og:type" content="website"/>
				<link rel="icon" type="image/x-icon" href="/favicon.ico"/>
				<link rel="alternate icon" type="image/x-icon" href="/favicon.png"/>
				<link rel="apple-touch-icon" type="image/x-icon" href="/favicon.png"/>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default MyDocument;
