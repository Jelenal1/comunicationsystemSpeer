import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "CodeReview",
	description: "A code review app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="h-24 w-full bg-green-500 fixed flex items-center">
					<h1 className="text-3xl font-bold flex items-center mx-2">
						<span className="text-3xl shadow-xl">&#60;</span>
						<span className="text-3xl shadow-xl mx-2">&#62;</span>
						CodeReview
					</h1>
					<Link
						href={"/"}
						className="bg-teal-500 rounded-md px-3 mt-1 pb-1 text-xl font-bold"
					>
						Home
					</Link>
				</div>
				{children}
			</body>
		</html>
	);
}
