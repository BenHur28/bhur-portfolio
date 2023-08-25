import react from "react";

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
		imageUrl: "insertImagehere",
	},
	{
		title: "title",
		description: "desc",
		tags: ["React", "TypeScript", "Next.js"],
		imageUrl: "insertImagehere",
	},
	{
		title: "title",
		description: "desc",
		tags: ["React", "TypeScript", "Next.js"],
		imageUrl: "insertImagehere",
	},
] as const;

export const experiencesData = [
	{
		title: "title",
		location: "location",
		description: "desc",
		icon: "icon",
		date: "date",
	},
	{
		title: "title",
		location: "location",
		description: "desc",
		icon: "icon",
		date: "date",
	},
	{
		title: "title",
		location: "location",
		description: "desc",
		icon: "icon",
		date: "date",
	},
] as const;
