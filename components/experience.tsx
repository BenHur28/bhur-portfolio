"use client";

import React from "react";
import SectionHeader from "./section-header";
import { useSectionInView } from "@/lib/hooks";
import { experiencesData } from "@/lib/data";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Experience() {
	const { ref } = useSectionInView("Experience");

	return (
		<section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
			<SectionHeader>My Experience</SectionHeader>
			<VerticalTimeline>
				{experiencesData.map((exp, index) => (
					<React.Fragment key={index}>
						<VerticalTimelineElement
							contentStyle={{
								background: "#f3f4f6",
								boxShadow: "none",
								border: "1px solid rgba(0, 0, 0, 0.05)",
								textAlign: "left",
								padding: "1.3rem 2rem",
							}}
							contentArrowStyle={{
								borderRight: "0.4rem solid #9ca3af",
							}}
							date={exp.date}
							icon={exp.icon}
							iconStyle={{
								background: "white",
								fontSize: "1.5rem",
							}}
						>
							<h3 className="font-semibold capitalize">{exp.title}</h3>
							<p className="font-normal !mt-0">{exp.location}</p>
							<p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
								{exp.description}
							</p>
						</VerticalTimelineElement>
					</React.Fragment>
				))}
			</VerticalTimeline>
		</section>
	);
}
