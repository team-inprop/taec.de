import Image from "next/image";
import Link from "next/link";
import "../app/layout";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
	title: "TAEC"
};

export default function Home() {
	return (
		<div className="flex flex-col relative bg-cover bg-center bg-no-repeat h-screen">
			<Head>
				<title>TAEC - Digitale Baubeschaffung</title>
				<link rel="icon" type="image/x-icon" href="/favicon.ico"/>
			</Head>
			<header className="flex justify-between md:justify-evenly items-center p-6">
				<Link href="/"><h1 style={{ letterSpacing: "4px" }} className="text-5xl font-bold text-white">TAEC</h1></Link>
				<nav>
					<Link href="/#kontakt" className="flex items-center text-white px-4 py-2 font text-xl font-bold kontakt-btn-border">Kontakt <svg className="ms-3" xmlns="http://www.w3.org/2000/svg" width="27" height="29" viewBox="0 0 27 29" fill="none">
						<path d="M13.5 0.5L25.7175 8.06C26.1225 8.31667 26.4375 8.66667 26.6625 9.11C26.8875 9.55333 27 10.02 27 10.51V25.7C27 26.47 26.7356 27.1292 26.2069 27.6775C25.6781 28.2258 25.0425 28.5 24.3 28.5H2.7C1.9575 28.5 1.32188 28.2258 0.793125 27.6775C0.264375 27.1292 0 26.47 0 25.7V10.51C0 10.02 0.1125 9.55333 0.3375 9.11C0.5625 8.66667 0.8775 8.31667 1.2825 8.06L13.5 0.5ZM13.5 16.81L24.03 10.3L13.5 3.79L2.97 10.3L13.5 16.81ZM13.5 20.1L2.7 13.38V25.7H24.3V13.38L13.5 20.1ZM13.5 25.7H24.3H2.7H13.5Z" fill="#F2F2F2"/>
					</svg>
					</Link>
				</nav>
			</header>
			<main className="flex justify-between md:justify-evenly items-start p-6">
				<div className="mb-6">
					<h1 className="text-4xl font-bold">Datenschutzerklärung</h1>
					<h3 className="text-xl font-bold">Welche Daten werden erhoben?</h3>
					<br />
					<p>Sie haben die Möglichkeit, eine E-Mail zu verfassen. Für bei uns ankommende E-Mails<br /> nutzen wir die <span className="italic">Mailserver von Google</span>.</p>
					<br />
					<p>Wir nutzen zu Analysezwecken Google Analytics, um beispielsweise festzustellen, wie<br /> viele Nutzer wir zu welchen Zeitpunkten erhalten.</p>
					<br />
					<h3 className="text-xl font-bold">Werden meine persönlichen Daten identifizierbar gespeichert?</h3>
					<br />
					<p>Alle Daten sind anonymisiert und diese anonymisierten Daten mit den renommierten<br /> Sicherheitsvorkehrungen von Google in bester Hand.</p>
					<p>Die Daten aus Google Analytics werden nur aggregiert ausgewertet. Das heißt, dass wir<br /> im Regelfall nicht feststellen können, in welchem Unternehmen Sie arbeiten, nur weil<br /> Sie unsere Website besuchen.Dies ist auch nicht unsere Absicht.
					</p>
					<br />
					<p>Aus demselben Grund können wir auch so gut wie keine Daten löschen - bis auf den<br /> Mailverkehr! Falls Sie diesen aus unserem Mailpostfach entfernt haben möchten,<br /> schreiben Sie uns eine Mail diesbezüglich, wir schicken Ihnen dann eine<br /> Bestätigungsmail und löschen daraufhin den gesamten Mailverkehr mit Ihnen.</p>
					<br />
					<h3 className="text-xl font-bold">Werden meine Daten an Dritte weitergegeben?</h3>
					<p>Daten werden außer Google <span className="font-bold">an keine Dritten</span> weitergegeben!</p>
					<br />
					<p>Analysen auf Basis aggregierter Daten (Beispielsweise: Anzahl Webseitenbesucher im<br /> Februar 2024) können (nur falls die Zahl groß genug ist, um Rückschlüsse auf einzelne<br /> auszuschließen) für Werbezwecke verwendet werden.</p>
				</div>
			</main>
			<div className="mt-auto footer flex items-end justify-between md:justify-evenly p-6 md:p-12 footer-bg-color">
				<div>
					<p><Link href="/impressum">Impressum</Link></p>
					<p><Link href="/datenschutz">Datenschutz</Link></p>
				</div>
				<div>
					<p>TAEC 2024</p>
				</div>
			</div>
		</div>
	);
};
