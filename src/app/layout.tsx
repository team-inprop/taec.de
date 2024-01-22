import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="de">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
				<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300&family=Raleway:wght@500&family=Raleway:wght@400&family=Roboto+Slab:wght@300&family=Roboto+Slab:wght@500&display=swap" rel="stylesheet"></link>
			</head>
			<body className={inter.className}>{children}</body>
		</html>
	)
}
