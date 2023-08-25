"use client";

import React from "react";
import SectionHeader from "./section-header";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import { experimental_useFormStatus } from "react-dom";
import SubmitBtn from "./submit-btn";

export default function Contact() {
	const { ref } = useSectionInView("Contact");
	const { pending } = experimental_useFormStatus();

	return (
		<motion.section
			id="contact"
			className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
			ref={ref}
			initial={{
				opacity: 0,
			}}
			whileInView={{
				opacity: 1,
			}}
			transition={{
				duration: 1,
			}}
			viewport={{
				once: true,
			}}
		>
			<SectionHeader>Contact Me</SectionHeader>

			<p className="text-gray-700 -mt-6 dark:text-white/80">
				Please contact me directly at{" "}
				<a className="underline" href="mailto:bhur777@gmail.com">
					bhur777@gmail.com
				</a>{" "}
				or through this form.
			</p>

			<form
				className="mt-10 flex flex-col"
				action={async (formData) => {
					await sendEmail(formData);
				}}
			>
				<input
					className="h-14 px-4 rounded-lg borderBlack transition-all"
					name="senderEmail"
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
				<SubmitBtn />
			</form>
		</motion.section>
	);
}
