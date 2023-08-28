import React from "react";
import lolImg from "@/public/lol.png";
import eCommerceImg from "@/public/eCommerce.png";
import aiImage from "@/public/aiImage.png";
import gameLibraryImg from "@/public/gameLibrary.png";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";

export const links = [
	{
		name: "Home",
		hash: "#home",
	},
	{
		name: "About",
		hash: "#about",
	},
	{
		name: "Projects",
		hash: "#projects",
	},
	{
		name: "Skills",
		hash: "#skills",
	},
	{
		name: "Experience",
		hash: "#experience",
	},
	{
		name: "Contact",
		hash: "#contact",
	},
] as const;

export const skillsData = [
	"HTML",
	"CSS",
	"JavaScript",
	"TypeScript",
	"React",
	"Next.js",
	"Node.js",
	"Git",
	"Tailwind",
	"Prisma",
	"SQL",
	"MongoDB",
	"Express",
	"Python",
	"Django",
	"Flask",
	"Framer Motion",
] as const;

export const projectsData = [
	{
		title: "E-Commerce Store + Dashboard",
		description:
			"E-commerce website for users can create products on an admin dashboard to sell on the store.",
		tags: ["React", "TypeScript", "Next.js", "Shadcn-UI", "SQL"],
		imageUrl: eCommerceImg,
	},
	{
		title: "Mastermind AI",
		description:
			"A SaaS AI platform where users can use the power of AI to get answers to questions, generate music, images, and more.",
		tags: ["React", "TypeScript", "Next.js", "Shadcn-UI"],
		imageUrl: aiImage,
	},
	{
		title: "The-game-library",
		description:
			"The game library is a website where user can look up games based on genre, platform, date relevancy, etc",
		tags: ["React", "TypeScript", "Chakra UI"],
		imageUrl: gameLibraryImg,
	},
	{
		title: "LOL.GG",
		description:
			"A website where users can look up information on the popular game, League of Legends. Users are able to look up champions and other players.",
		tags: ["React", "TypeScript", "Next.js"],
		imageUrl: lolImg,
	},
] as const;

export const experiencesData = [
	{
		title: "Support Specialist",
		location: "NYC, New York metropolitan area",
		description:
			"Worked with WebFocus, a proprietary software platform that allows users to create, analyze, and collaborate on analytics content for business purposes.",
		icon: React.createElement(CgWorkAlt),
		date: "2019 - 2020",
	},
	{
		title: "Technical Support Engineer",
		location: "NYC, New York metropolitan area",
		description:
			"Tested and debugged software product issues to create/report JIRA tickets. Collaborated with internal Product Managers to help improve the product.",
		icon: React.createElement(CgWorkAlt),
		date: "2020 - 2022",
	},
	{
		title: "Web Developer",
		location: "NYC, New York metropolitan area",
		description:
			"I'm currently a front-end focused web developer working on honing my skills everyday. My stack includes React, Next.js, TypeScript, Tailwind, and MongoDB. I'm open to full-time opportunities.",
		icon: React.createElement(FaReact),
		date: "2023 - Present",
	},
] as const;
