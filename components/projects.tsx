"use client";

import React from "react";
import SectionHeader from "./section-header";
import { projectsData } from "@/lib/data";

export default function Projects() {
	return (
		<section id="projects" className="scroll-mt-28 mb-28">
			<SectionHeader>My projects</SectionHeader>
			<div>
				{projectsData.map((project, index) => (
					<React.Fragment key={index}>Project goes here</React.Fragment>
				))}
			</div>
		</section>
	);
}
