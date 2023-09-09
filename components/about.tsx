"use client";

import SectionHeader from "./section-header";
import { motion } from "framer-motion";

import { useSectionInView } from "@/lib/hooks";

export default function About() {
	const { ref } = useSectionInView("About");

	return (
		<motion.section
			className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			id="about"
			ref={ref}
		>
			<SectionHeader>About Me</SectionHeader>
			<p className="mb-3">
				After graduating with a degree in{" "}
				<span className="font-medium">Computer Science</span>, I had gotten my
				first job as an Technical Support Engineer. After a few years, I decided
				to pursue my passion for programming as a{" "}
				<span className="font-medium">Software Engineer</span>.{" "}
				<span className="italic">My favorite part of programming</span> is the
				problem-solving aspect. I love the feeling of finally figuring out a
				solution to a problem. My core stack is{" "}
				<span className="font-medium">
					React, Next.js, Node.js, and MongoDB
				</span>
				. I am also familiar with TypeScript and other langauges such as Python.
				I am always looking to learn new technologies. I am currently looking
				for a <span className="font-medium">full-time position</span> as a
				Software Engineer.
			</p>

			<p>
				<span className="italic">When I'm not coding</span>, I enjoy playing
				video games, watching movies, and working out.
			</p>
		</motion.section>
	);
}
