"use client";

import React from "react";
import SectionHeader from "./section-header";
import { FaPaperPlane } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";

export default function Contact() {
	const { ref } = useSectionInView("Contact");

	return (
		<section
			id="contact"
			className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
			ref={ref}
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
				<button
					type="submit"
					className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all 
                    focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105"
				>
					Submit{" "}
					<FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
				</button>
			</form>
		</section>
	);
}
