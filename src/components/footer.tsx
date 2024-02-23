import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
    return (
        <footer className="mt-auto footer p-6 md:p-12 footer-bg-color">
            <p className="text-center mb-4">Unterstützt durch:</p>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 place-items-center">
                <div>
                    <div className="scholarship-partner p-1 mb-2">
                        <Image height={150} width={150} alt="Kofinanziert von der Europäischen Union" title="Kofinanziert von der Europäischen Union" src="/media/kofinanziert-von-der-europaischen-union.png" />
                    </div>
                </div>
                <div className="scholarship-partner p-1">
                    <Image height={150} width={150} alt="Technical University of Berlin" title="Technical University of Berlin" src="/media/technical-university-of-berlin.svg" />
                </div>
                <div className="scholarship-partner p-1 mb-2">
                    <Image height={150} width={150} alt="City of Berlin" title="City of Berlin" src="/media/city-of-berlin.png" />
                </div>
                <div className="scholarship-partner p-1 mb-2">
                    <Image height={150} width={150} alt="Science & Startups" title="Science & Startups" src="/media/science-and-startups.png" />
                </div>
            </div>
            <div className="flex items-end justify-between md:justify-evenly mt-8">
                <div>
                    <p><Link href="/impressum">Impressum</Link></p>
                    <p><Link href="/datenschutz">Datenschutz</Link></p>
                </div>
                <div>
                    <p>TAEC 2024</p>
                </div>
            </div>
        </footer>
    );
};

export default Header;
