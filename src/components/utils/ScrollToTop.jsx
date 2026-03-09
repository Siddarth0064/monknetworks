import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Reset scroll to top
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant" // We use "instant" to ensure it's at the top before animations start
        });
    }, [pathname]);

    return null;
};

export default ScrollToTop;
