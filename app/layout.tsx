import Header from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-session-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Ben Hur | Personal Portfolio",
	description: "Ben is a front-end focused web developer.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="!scroll-smooth">
			<body
				className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36`}
			>
				<div
					className="bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] 
								sm:w-[68.75rem]"
				></div>
				<div
					className="bg-[#dbd7fb] absolute top-[-1rem] left-[-35rem] -z-10
        						h-[31.25rem] w-[50rem] rounded-full blur-[10rem] 
        						sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-5[-rem]"
				></div>
				<ActiveSectionContextProvider>
					<Header />

					{children}
					<Footer />
					<Toaster />
				</ActiveSectionContextProvider>
			</body>
		</html>
	);
}
