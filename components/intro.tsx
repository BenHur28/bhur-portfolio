import Image from "next/image";
import React from "react";

export default function Intro() {
	return (
		<section>
			<div className="flex items-center justify-center">
				<div>
					<Image height="192" width="192" src="/pfp.png" alt="Ben Hur" />
				</div>
			</div>
		</section>
	);
}
