import React from "react";
import SectionHeader from "./section-header";
import { FaPaperPlane } from "react-icons/fa";

export default function Contact() {
	return (
		<section id="contact" className="mb-20">
			<SectionHeader>Contact Me</SectionHeader>

			<p className="text-gray-700 -mt-6 dark:text-white/80">
				Please contact me directly at{" "}
				<a className="underline" href="mailto:bhur777@gmail.com">
					bhur777@gmail.com
				</a>{" "}
				or through this form.
			</p>

			<form>
				<input type="email" />
				<textarea />
				<button type="submit">
					Submit <FaPaperPlane />
				</button>
			</form>
		</section>
	);
}
