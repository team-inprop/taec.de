import Header from "../components/header";
import Footer from "../components/footer";

const Datenschutz: React.FC = () => {
	return (
		<div className="flex flex-col relative bg-cover bg-center bg-no-repeat h-screen">
			<Header />

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
					<p>Die Daten aus Google Analytics werden nur aggregiert ausgewertet. Das heißt, dass wir<br /> im Regelfall nicht feststellen können, in welchem Unternehmen Sie arbeiten, nur weil<br /> Sie unsere Website besuchen. Dies ist auch nicht unsere Absicht.
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

			<Footer />
		</div>
	);
};

export default Datenschutz;
