import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import useMobile from '../hooks/useMobile';

const AboutUs = () => {
    const isMobile = useMobile();
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

    return (
        <section
            id="aboutus"
            ref={containerRef}
            style={{
                padding: isMobile ? "4rem 5%" : "8rem 5%",
                minHeight: isMobile ? "auto" : "80vh",
                overflow: "hidden",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <div className="container" style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row", // Responsive handled here
                alignItems: "center",
                gap: isMobile ? "2rem" : "4rem",
                width: "100%",
                maxWidth: "1200px"
            }}>
                {/* Left Side: Graphic / Monk Illustration Placeholder */}
                <motion.div
                    style={{ flex: 1, position: "relative", display: "flex", justifyContent: "center", alignItems: "center", minHeight: isMobile ? "350px" : "500px" }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                >
                    {/* Spectral Iris Premium Container */}
                    <div style={{ position: "relative", width: isMobile ? "280px" : "400px", height: isMobile ? "280px" : "400px", display: "flex", alignItems: "center", justifyContent: "center" }}>

                        {/* 1. Glassmorphic Orbital Rings */}
                        {[isMobile ? 260 : 380, isMobile ? 200 : 300, isMobile ? 140 : 220].map((size, i) => (
                            <motion.div
                                key={size}
                                style={{
                                    position: "absolute",
                                    width: size,
                                    height: size,
                                    borderRadius: "50%",
                                    border: `1px solid rgba(255, 255, 255, ${0.05 + i * 0.05})`,
                                    backdropFilter: "blur(2px)",
                                    background: `radial-gradient(circle, transparent 70%, rgba(30, 58, 95, ${0.05 + i * 0.02}) 100%)`,
                                    boxShadow: `inset 0 0 20px rgba(0, 242, 234, ${0.02 + i * 0.01})`
                                }}
                                animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                                transition={{ duration: 40 + i * 10, repeat: Infinity, ease: "linear" }}
                            />
                        ))}

                        {/* 2. Technical Reticle (Crosshairs & Measurements) */}
                        <div style={{ position: "absolute", inset: 0, opacity: 0.3, pointerEvents: "none" }}>
                            {/* Horizontal Line */}
                            <div style={{ position: "absolute", top: "50%", left: "10%", right: "10%", height: "1px", background: "linear-gradient(90deg, transparent, #00f2ea, transparent)" }} />
                            {/* Vertical Line */}
                            <div style={{ position: "absolute", left: "50%", top: "10%", bottom: "10%", width: "1px", background: "linear-gradient(180deg, transparent, #00f2ea, transparent)" }} />
                            {/* Corner Marks */}
                            {[0, 90, 180, 270].map(angle => (
                                <div key={angle} style={{
                                    position: "absolute",
                                    width: "20px",
                                    height: "20px",
                                    borderTop: "1px solid #ffcc33",
                                    borderLeft: "1px solid #ffcc33",
                                    transform: `rotate(${angle}deg)`,
                                    top: angle === 0 || angle === 270 ? "15%" : "85%",
                                    left: angle === 0 || angle === 90 ? "15%" : "85%",
                                    marginTop: angle >= 180 ? "-20px" : "0",
                                    marginLeft: angle === 90 || angle === 180 ? "-20px" : "0"
                                }} />
                            ))}
                        </div>

                        {/* 3. Aperture Iris Blades (The Mechanical "Eye") */}
                        <div style={{ position: "relative", width: isMobile ? "100px" : "160px", height: isMobile ? "100px" : "160px", overflow: "hidden", borderRadius: "50%", border: "2px solid rgba(255, 204, 51, 0.3)" }}>
                            {[...Array(8)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    style={{
                                        position: "absolute",
                                        width: "120%",
                                        height: "40%",
                                        background: "linear-gradient(to right, #040812, #1e3a5f)",
                                        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                                        clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)",
                                        left: "50%",
                                        top: "50%",
                                        transformOrigin: "0% 50%",
                                        rotate: i * 45
                                    }}
                                    animate={{
                                        rotate: [i * 45, i * 45 + 10, i * 45],
                                        opacity: [0.8, 1, 0.8]
                                    }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}
                                />
                            ))}
                            {/* Inner Iris Glow */}
                            <div style={{
                                position: "absolute",
                                inset: "15%",
                                borderRadius: "50%",
                                background: "radial-gradient(circle, rgba(255, 204, 51, 0.4) 0%, transparent 80%)",
                                zIndex: 5,
                                filter: "blur(5px)"
                            }} />
                        </div>

                        {/* 4. Fiber-Optic Satellite Nodes with Trailing Paths */}
                        {[...Array(4)].map((_, i) => (
                            <motion.div
                                key={i}
                                style={{ position: "absolute", width: "100%", height: "100%" }}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 15 + i * 5, repeat: Infinity, ease: "linear" }}
                            >
                                <div style={{
                                    position: "absolute",
                                    top: "15%",
                                    left: "50%",
                                    width: "4px",
                                    height: "4px",
                                    background: "#ffcc33",
                                    borderRadius: "50%",
                                    boxShadow: "0 0 15px #ffcc33"
                                }}>
                                    {/* Tail */}
                                    <div style={{
                                        position: "absolute",
                                        top: "2px",
                                        left: "50%",
                                        width: "1px",
                                        height: "60px",
                                        background: "linear-gradient(to bottom, #ffcc33, transparent)",
                                        transformOrigin: "top",
                                        transform: "rotate(180deg)",
                                        opacity: 0.6
                                    }} />
                                </div>
                            </motion.div>
                        ))}

                        {/* 5. Central Intelligence Heart */}
                        <motion.div
                            style={{
                                position: "absolute",
                                width: isMobile ? "25px" : "40px",
                                height: isMobile ? "25px" : "40px",
                                background: "radial-gradient(circle, #ffcc33 20%, #f05a28 100%)",
                                borderRadius: "50%",
                                boxShadow: "0 0 30px rgba(255, 204, 51, 0.8)",
                                zIndex: 10
                            }}
                            animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />

                        {/* Professional Metric Labeling */}
                        <motion.div
                            style={{
                                position: "absolute",
                                top: "-20px",
                                right: "-20px",
                                padding: "4px 10px",
                                border: "1px solid rgba(0, 242, 234, 0.3)",
                                background: "rgba(4, 8, 18, 0.8)",
                                color: "#00f2ea",
                                fontSize: "0.65rem",
                                fontFamily: "monospace",
                                letterSpacing: "2px",
                                textTransform: "uppercase"
                            }}
                            animate={{ opacity: [0.4, 0.7, 0.4] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            Vision State: Active
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Side: Text Content */}
                <motion.div
                    style={{ flex: 1, textAlign: isMobile ? "center" : "left" }}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <h2 style={{
                        fontSize: isMobile ? "2rem" : "2.5rem",
                        marginBottom: "1.5rem",
                        color: "white"
                    }}>
                        Building <span style={{ color: "var(--primary-energy)" }}>Calm</span>,<br />
                        Powering <span style={{ color: "var(--professional-navy)" }}>Technology</span>.
                    </h2>
                    <p style={{
                        fontSize: isMobile ? "1rem" : "1.1rem",
                        lineHeight: "1.8",
                        color: "rgba(255, 255, 255, 0.8)",
                        marginBottom: "2rem"
                    }}>
                        At MonkNetworks, we believe technology should be powerful yet unobtrusive.
                        Our mission is to create resilient digital infrastructures that operate seamlessly in the background,
                        allowing businesses to focus on growth without technical friction.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            padding: "12px 30px",
                            background: "transparent",
                            border: "1px solid var(--primary-energy)",
                            color: "var(--primary-energy)",
                            borderRadius: "50px",
                            fontSize: "1rem",
                            cursor: "pointer",
                            fontWeight: "500"
                        }}
                    >
                        Learn More
                    </motion.button>
                </motion.div>
            </div>

            {/* Background Accent */}
            <div style={{
                position: "absolute",
                top: "50%",
                right: "-10%",
                width: "600px",
                height: "600px",
                background: "radial-gradient(circle, rgba(30, 58, 95, 0.15), transparent 70%)",
                borderRadius: "50%",
                zIndex: -1
            }} />
        </section>
    );
};

export default AboutUs;
