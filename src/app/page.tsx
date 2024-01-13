// import Image from 'next/image'

// export default function Home() {
// 	return (
// 		<main className="flex min-h-screen flex-col items-center justify-between p-24">
// 			<div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
// 				<p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
// 					Get started by editing&nbsp;
// 					<code className="font-mono font-bold">src/app/page.tsx</code>
// 				</p>
// 				<div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
// 					<a
// 						className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
// 						href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
// 						target="_blank"
// 						rel="noopener noreferrer"
// 					>
// 						By{' '}
// 						<Image
// 							src="/vercel.svg"
// 							alt="Vercel Logo"
// 							className="dark:invert"
// 							width={100}
// 							height={24}
// 							priority
// 						/>
// 					</a>
// 				</div>
// 			</div>

// 			<div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
// 				<Image
// 					className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
// 					src="/next.svg"
// 					alt="Next.js Logo"
// 					width={180}
// 					height={37}
// 					priority
// 				/>
// 			</div>

// 			<div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
// 				<a
// 					href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
// 					className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 				>
// 					<h2 className={`mb-3 text-2xl font-semibold`}>
// 						Docs{' '}
// 						<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
// 							-&gt;
// 						</span>
// 					</h2>
// 					<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
// 						Find in-depth information about Next.js features and API.
// 					</p>
// 				</a>

// 				<a
// 					href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// 					className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 				>
// 					<h2 className={`mb-3 text-2xl font-semibold`}>
// 						Learn{' '}
// 						<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
// 							-&gt;
// 						</span>
// 					</h2>
// 					<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
// 						Learn about Next.js in an interactive course with&nbsp;quizzes!
// 					</p>
// 				</a>

// 				<a
// 					href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
// 					className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 				>
// 					<h2 className={`mb-3 text-2xl font-semibold`}>
// 						Templates{' '}
// 						<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
// 							-&gt;
// 						</span>
// 					</h2>
// 					<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
// 						Explore starter templates for Next.js.
// 					</p>
// 				</a>

// 				<a
// 					href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
// 					className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 				>
// 					<h2 className={`mb-3 text-2xl font-semibold`}>
// 						Deploy{' '}
// 						<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
// 							-&gt;
// 						</span>
// 					</h2>
// 					<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
// 						Instantly deploy your Next.js site to a shareable URL with Vercel.
// 					</p>
// 				</a>
// 			</div>
// 		</main>
// 	)
// }

// pages/index.js
import Head from 'next/head';
import Image from "next/image";

export default function Home() {
	return (
		<div className="relative bg-cover bg-center bg-no-repeat h-screen">
			<Head>
				<title>TAEC</title>
			</Head>

			<header className="flex justify-between items-center p-6 px-80">
				<h1 className="text-5xl font-bold text-white">TAEC</h1>
				<nav>
					<a href="#kontakt" className="text-white px-4 py-2 border border-dashed border-2 border-white rounded-md">Kontakt</a>
				</nav>
			</header>

			<main>
				<div className="construction-background-img text-white flex flex-col items-center pt-32 pb-48">
					<div>
						<h2 className="text-7xl mb-4"><span className="font-bold" style={{ color: "#AEB7E5" }}>Beschaffung</span>, digital, <span className="font-bold">einfach</span>.</h2>
					</div>
					<div className="concrete-box border rounded-xl mt-6 flex flex-col place-content-between">
						<div>

						</div>
						<div className="text-center">
							<p className="beton text-4xl">Beton</p>
							<p className="geliefert">Geliefert</p>
						</div>
						<div>

						</div>
					</div>
				</div>
				<div>
					<p className="mb-10 mt-4 text-6xl text-center">...mit Daten, die schon da sind.</p>
					<div className="flex justify-center space-x-48">
						<div className="text-center">
							<div className="p-4 justify-center flex">
								<Image priority src="./icon.svg" width={50} height={50} alt="icon" />
							</div>
							<p className="font-bold text-2xl">Baupläne</p>
						</div>
						<div className="text-center">
							<div className="p-4 justify-center flex">
								<Image priority src="./icon.svg" width={50} height={50} alt="icon" />
							</div>
							<p className="font-bold text-2xl">Termine</p>
						</div>
						<div className="text-center">
							<div className="p-4 justify-center flex">
								<Image priority src="./icon.svg" width={50} height={50} alt="icon" />
							</div>
							<p className="font-bold text-2xl">Lieferscheine</p>
						</div>
						<div className="text-center">
							<div className="p-4 justify-center flex">
								<Image priority src="./icon.svg" width={50} height={50} alt="icon" />
							</div>
							<p className="font-bold text-2xl">Rechnungen</p>
						</div>
					</div>
					<p className="text-6xl mt-8 text-center">...erreichbar über das BIM-Modell.</p>
				</div>
			</main>
		</div>
	);
};
