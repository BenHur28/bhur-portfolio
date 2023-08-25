import Image from "next/image";
import React from "react";

export default function Intro() {
	return (
		<section>
			<div className="flex items-center justify-center">
				<div className="relative">
					<div></div>
					<Image
						height={192}
						width={192}
						quality={95}
						src="/pfp.png"
						alt="Ben Hur"
						className="h-24 w-24 rounded-full border-[0.35rem] border-white shadow-xl"
					/>
					<span className="absolute bottom-0 right-0 text-2xl">👋</span>
				</div>
			</div>
		</section>
	);
}
