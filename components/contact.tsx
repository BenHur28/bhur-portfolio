"use client";

import React from "react";
import SectionHeader from "./section-header";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import { toast } from "react-hot-toast";

export default function Contact() {
	const { ref } = useSectionInView("Contact");

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
				className="mt-10 flex flex-col dark:text-black"
				action={async (formData) => {
					const { data, error } = await sendEmail(formData);

					if (error) {
						console.log("print this error");
						toast.error(error);
						return;
					}

					toast.success("Email sent successfully!");
				}}
			>
				<input
					className="h-14 px-4 rounded-lg borderBlack transition-all dark:bg-white dark:focus:bg-opacity-100 dark:outline-none"
					name="senderEmail"
					type="email"
					required
					maxLength={500}
					placeholder="Your email"
				/>
				<textarea
					className="h-52 my-3 rounded-lg borderBlack p-4 transition-all dark:bg-white dark:focus:bg-opacity-100 dark:outline-none"
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
