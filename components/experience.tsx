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
						<VerticalTimelineElement></VerticalTimelineElement>
					</React.Fragment>
				))}
			</VerticalTimeline>
		</section>
	);
}
