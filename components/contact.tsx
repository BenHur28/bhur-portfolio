import React from "react";
import SectionHeader from "./section-header";
import { FaPaperPlane } from "react-icons/fa";

export default function Contact() {
	return (
		<section
			id="contact"
			className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
		>
			<SectionHeader>Contact Me</SectionHeader>

			<p className="text-gray-700 -mt-6 dark:text-white/80">
				Please contact me directly at{" "}
				<a className="underline" href="mailto:bhur777@gmail.com">
					bhur777@gmail.com
				</a>{" "}
				or through this form.
			</p>

			<form className="mt-10 flex flex-col">
				<input
					className="h-14 px-4 rounded-lg borderBlack transition-all"
					type="email"
					required
					maxLength={500}
					placeholder="Your email"
				/>
				<textarea
					className="h-52 my-3 rounded-lg borderBlack p-4 transition-all"
					name="message"
					placeholder="Your message"
					required
					maxLength={5000}
				/>
				<button type="submit">
					Submit <FaPaperPlane />
				</button>
			</form>
		</section>
	);
}
