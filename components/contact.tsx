import React from "react";
import SectionHeader from "./section-header";

export default function Contact() {
	return (
		<section id="contact" className="mb-20">
			<SectionHeader>Contact Me</SectionHeader>
			<p className="text-gray-700 -mt-6 dark:text-white/80">
				Please contact me directly at{" "}
				<a className="underline" href="mailto:example@gmail.com">
					bhur777@gmail.com
				</a>{" "}
				or through this form.
			</p>
		</section>
	);
}
