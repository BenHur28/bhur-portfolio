"use client";

import React, { useEffect } from "react";
import SectionHeader from "./section-header";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useActiveSectionContext } from "@/context/active-session-context";
import { useInView } from "react-intersection-observer";

export default function Projects() {
	const { ref, inView } = useInView({ threshold: 0.5 });
	const { setActiveSection } = useActiveSectionContext();

	useEffect(() => {
		if (inView) {
			setActiveSection("Projects");
		}
	}, [inView, setActiveSection]);

	return (
		<section ref={ref} id="projects" className="scroll-mt-28 mb-28">
			<SectionHeader>My projects</SectionHeader>
			<div>
				{projectsData.map((project, index) => (
					<React.Fragment key={index}>
						<Project {...project}></Project>
					</React.Fragment>
				))}
			</div>
		</section>
	);
}
