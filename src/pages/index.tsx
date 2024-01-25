import Image from "next/image";
import Link from "next/link";
import "../app/layout";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "TAEC"
};

export default function Home() {
	return (
		<div className="flex flex-col relative bg-cover bg-center bg-no-repeat h-screen">
			<header className="flex justify-between md:justify-evenly items-center p-6">
				<a href="/"><h1 style={{ letterSpacing: "4px" }} className="text-5xl font-bold text-white">TAEC</h1></a>
				<nav>
					<a href="#kontakt" className="flex items-center text-white px-4 py-2 font text-xl font-bold kontakt-btn-border">Kontakt <svg className="ms-3" xmlns="http://www.w3.org/2000/svg" width="27" height="29" viewBox="0 0 27 29" fill="none">
						<path d="M13.5 0.5L25.7175 8.06C26.1225 8.31667 26.4375 8.66667 26.6625 9.11C26.8875 9.55333 27 10.02 27 10.51V25.7C27 26.47 26.7356 27.1292 26.2069 27.6775C25.6781 28.2258 25.0425 28.5 24.3 28.5H2.7C1.9575 28.5 1.32188 28.2258 0.793125 27.6775C0.264375 27.1292 0 26.47 0 25.7V10.51C0 10.02 0.1125 9.55333 0.3375 9.11C0.5625 8.66667 0.8775 8.31667 1.2825 8.06L13.5 0.5ZM13.5 16.81L24.03 10.3L13.5 3.79L2.97 10.3L13.5 16.81ZM13.5 20.1L2.7 13.38V25.7H24.3V13.38L13.5 20.1ZM13.5 25.7H24.3H2.7H13.5Z" fill="#F2F2F2"/>
					</svg>
					</a>
				</nav>
			</header>

			<main>
				<div className="construction-background-img text-white flex flex-col items-center pt-32 pb-48">
					<div>
						<h2 className="text-center text-4xl md:text-7xl mb-4"><span className="font-bold" style={{ color: "#AEB7E5" }}>Beschaffung</span>, digital, <span className="font-bold">einfach</span>.</h2>
					</div>
					<div className="relative">
						<div className="concrete-box border rounded-xl mt-6 flex flex-col justify-between h-full">
							<div className="block mx-auto pt-3">
								<svg width="161" height="20" viewBox="0 0 161 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="10" cy="10" r="9.5" fill="#DFC3B0"/>
									<path d="M19.5 10L141.5 9.99999" stroke="#DFC3B0" stroke-opacity="0.4" stroke-width="3" stroke-dasharray="3 3"/>
									<circle cx="151" cy="10" r="7.5" fill="#1C0E05" stroke="#967A6A" stroke-width="4"/>
								</svg>
								<div className="flex justify-between h-1/3">
									<span>12:00</span>
									<span>14:00</span>
								</div>
							</div>
							<div className="text-center">
								<p className="font-bold beton text-4xl">Beton</p>
								<p className="font-bold geliefert">Geliefert</p>
							</div>
							<div className="pb-3 px-4">
								<div>
									<span className="text-xl font-bold">Haus 1</span>
								</div>
								<div className="flex justify-between">
									<span className="text-xl font-bold">EG</span>
									<span className="text-xl font-bold">Wand</span>
								</div>
							</div>
						</div>
						<div className="hidden md:block absolute small-info-cards md:text-normal">
							<div className="lieferschein flex px-1">
								<Image src="./document.svg" alt="document" width={11} height={11} />
								&nbsp;Lieferschein
							</div>
							<div className="rechnung-felt flex px-1">
								<Image src="./document.svg" alt="document" width={11} height={11} />
								&nbsp;Rechnung fehlt
							</div>
						</div>
					</div>
				</div>
				<div>
					<p className="mb-10 mt-4 text-4xl md:text-6xl text-center px-4">...mit Daten, die schon da sind.</p>
					<div className="flex flex-wrap justify-evenly md:px-48">
						<div className="text-center mx-5">
							<div className="p-4 justify-center flex">
								<Image priority src="./icon.svg" width={50} height={50} alt="icon" />
							</div>
							<p style={{ letterSpacing: "1.25px" }} className="font-bold text-2xl">Baupläne</p>
						</div>
						<div className="text-center mx-5">
							<div className="p-4 justify-center flex">
								<Image priority src="./icon.svg" width={50} height={50} alt="icon" />
							</div>
							<p style={{ letterSpacing: "1.25px" }} className="font-bold text-2xl">Termine</p>
						</div>
						<div className="text-center mx-5">
							<div className="p-4 justify-center flex">
								<Image priority src="./icon.svg" width={50} height={50} alt="icon" />
							</div>
							<p style={{ letterSpacing: "1.25px" }} className="font-bold text-2xl">Lieferscheine</p>
						</div>
						<div className="text-center mx-5">
							<div className="p-4 justify-center flex">
								<Image priority src="./icon.svg" width={50} height={50} alt="icon" />
							</div>
							<p style={{ letterSpacing: "1.25px" }} className="font-bold text-2xl">Rechnungen</p>
						</div>
					</div>
					<p className="py-12 text-center text-4xl md:text-6xl">...erreichbar über das BIM-Modell.</p>
				</div>
			</main>
			<div className="flex items-center justify-around screenshot-bg">
				<Image priority alt="Bildschirmfoto" width={1000} height={100} src="./screenshot.png" />
			</div>
			<div className="flex flex-col items-center justify-center relative rounded-[55px]">
				<div className="relative flex-1 text-center py-12 px-4 text-4xl md:text-6xl">
					Für Bauleiter. Für Poliere.
				</div>
				<div id="kontakt" className="kontakt-border mx-12 px-6 md:px-12">
					<div className="py-4 md:py-20">
						<p className="text-xl md:text-4xl">Ist <span className="font-bold">TAEC</span> in Ihrem nächsten Bauprojekt sinnvoll?</p>
						<p className="text-md md:text-2xl"><span style={{ opacity: "0.8" }}>Schreiben Sie eine </span>unverbindliche Anfrage<span style={{ opacity: "0.8" }}>, um Ihrem Unternehmen bei Interesse 5%<br className="hidden md:block" /> Rabatt zu sichern.*1</span></p>
						<a href="mailto:info@taec.de">
							<h1 style={{ fontWeight: "500" }} className="text-5xl text-center font-bold pt-12">info@taec.de</h1>
						</a>
					</div>
				</div>
				<p style={{ opacity: 0.4 }} className="pt-12 self-start ps-6 mb-2">*1 Rabatt anwendbar auf Gesamtkosten des Produkts beim ersten Bauprojekt des Interessenten, bei welchem TAEC verwendet wird.</p>
			</div>

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
