import React from "react";
import lolImg from "@/public/lol.png";
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
		title: "title",
		description: "desc",
		tags: ["React", "TypeScript", "Next.js"],
		imageUrl: lolImg,
	},
	{
		title: "title",
		description: "desc",
		tags: ["React", "TypeScript", "Next.js"],
		imageUrl: lolImg,
	},
	{
		title: "title",
		description: "desc",
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
