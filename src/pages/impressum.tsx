import Header from "../components/header";
import Footer from "../components/footer";

const Impressum: React.FC = () => {
	return (
		<div className="flex flex-col relative bg-cover bg-center bg-no-repeat h-screen">
			<Header />

			<main className="flex justify-evenly items-start p-6">
				<div>
					<h1 className="font-bold text-4xl">Impressum</h1>
					<p className="font-bold">Fabian Fischer & Patrick Hein</p>
					<p>Gustav-Adolf-Straße 115</p>
					<p>13086 Berlin</p>
					<p style={{ opacity: 0.4 }}>Sie erreichen uns unter der E-Mail:</p>
					<a href="mailto:info@taec.de">info@taec.de</a>
				</div>
			</main>

			<Footer />
		</div>
	);
};

export default Impressum;
