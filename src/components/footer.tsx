import Link from "next/link";

const Header: React.FC = () => {
	return (
        <footer className="mt-auto footer flex items-end justify-between md:justify-evenly p-6 md:p-12 footer-bg-color">
            <div>
                <p><Link href="/impressum">Impressum</Link></p>
                <p><Link href="/datenschutz">Datenschutz</Link></p>
            </div>
            <div>
                <p>TAEC 2024</p>
            </div>
        </footer>
	);
};

export default Header;
