import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import VantaGlobe from "./VantaGlobe";
import useMobile from "../hooks/useMobile";

const taglines = [
    "Empowering Your Digital Future",
    "Secure Server Solutions",
    "Next-Gen Network Infrastructure",
    "Reliable Cloud Management"
];

const Hero = () => {
    const isMobile = useMobile();
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % taglines.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section
            id="home"
            style={{
                position: "relative",
                height: "100vh",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: isMobile ? "center" : "flex-start",
                overflow: "hidden",
                paddingTop: isMobile ? "60px" : "80px",
                boxSizing: "border-box",
                userSelect: "none",
                WebkitUserSelect: "none",
                MozUserSelect: "none",
                msUserSelect: "none"
            }}
        >
            <VantaGlobe />

            <div style={{ textAlign: isMobile ? "center" : "left", zIndex: 1, padding: isMobile ? "0 20px" : "0 5%", maxWidth: "800px" }}>
                {/* <h2 style={{ fontSize: "1.5rem", color: "#00f2ea", marginBottom: "1rem", letterSpacing: "2px", textTransform: "uppercase" }}>
                    MonkNetworks
                </h2> */}

                <div style={{ height: isMobile ? "120px" : "100px", display: "flex", alignItems: "center", justifyContent: isMobile ? "center" : "flex-start" }}>
                    <AnimatePresence mode="wait">
                        <motion.h1
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            style={{
                                fontSize: isMobile ? "2.5rem" : "4rem",
                                fontWeight: "800",
                                background: "linear-gradient(to bottom, #ffffff, #a0a0a0)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                lineHeight: 1.2,
                                margin: 0
                            }}
                        >
                            {taglines[index]}
                        </motion.h1>
                    </AnimatePresence>
                </div>

                <p style={{ marginTop: "2rem", fontSize: isMobile ? "1rem" : "1.2rem", maxWidth: "600px", margin: isMobile ? "2rem auto" : "2rem 0", color: "#d0d0d0" }}>
                    Providing top-tier server infrastructure and network management solutions for modern businesses.
                </p>

                <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 242, 234, 0.6)" }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                        padding: "15px 40px",
                        fontSize: "1.1rem",
                        fontWeight: "bold",
                        background: "linear-gradient(90deg, #00f2ea, #007bff)",
                        border: "none",
                        borderRadius: "50px",
                        color: "white",
                        cursor: "pointer",
                        marginTop: "20px"
                    }}
                >
                    Get Started
                </motion.button>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                style={{
                    position: "absolute",
                    bottom: "30px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    color: "#f20000ff",
                    fontSize: "2rem"
                }}
            >
                ↓
            </motion.div>
        </section>
    );
};

export default Hero;
