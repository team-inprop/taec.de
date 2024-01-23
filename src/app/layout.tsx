import { Inter } from "next/font/google"
import "./globals.css"

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
				<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500&family=Roboto+Slab:wght@300;500;800&display=swap" rel="stylesheet"></link>
			</head>
			<body>{children}</body>
		</html>
	)
}
