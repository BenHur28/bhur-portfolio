import { useActiveSectionContext } from "@/context/active-session-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export function useSectionInview() {
	const { ref, inView } = useInView({ threshold: 0.5 });
	const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

	useEffect(() => {
		if (inView && Date.now() - timeOfLastClick > 1000) {
			setActiveSection("Home");
		}
	}, [inView, setActiveSection, timeOfLastClick]);

	return {
		ref,
	};
}
