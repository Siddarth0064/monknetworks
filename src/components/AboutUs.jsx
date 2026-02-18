import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AboutUs = () => {
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
                padding: "8rem 5%",
                minHeight: "80vh",
                overflow: "hidden",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <div className="container" style={{
                display: "flex",
                flexDirection: "row", // Responsive handled via CSS if needed, default row
                alignItems: "center",
                gap: "4rem",
                width: "100%",
                maxWidth: "1200px"
            }}>
                {/* Left Side: Graphic / Monk Illustration Placeholder */}
                <motion.div
                    style={{ flex: 1, position: "relative", display: "flex", justifyContent: "center" }}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    {/* Abstract Monk Halo */}
                    <div style={{
                        width: "300px",
                        height: "300px",
                        borderRadius: "50%",
                        border: "2px solid rgba(240, 90, 40, 0.2)",
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <motion.div
                            style={{
                                position: "absolute",
                                width: "100%",
                                height: "100%",
                                borderRadius: "50%",
                                border: "1px dashed rgba(30, 58, 95, 0.5)"
                            }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        />
                        <motion.div
                            style={{
                                width: "200px",
                                height: "200px",
                                background: "radial-gradient(circle, rgba(240, 90, 40, 0.1), transparent)",
                                borderRadius: "50%"
                            }}
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        />
                        {/* Placeholder Text or Image */}
                        <span style={{ color: "var(--primary-energy)", fontWeight: "bold", fontSize: "1.2rem", zIndex: 10 }}>
                            Vision
                        </span>
                    </div>
                </motion.div>

                {/* Right Side: Text Content */}
                <motion.div
                    style={{ flex: 1 }}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <h2 style={{
                        fontSize: "2.5rem",
                        marginBottom: "1.5rem",
                        color: "white"
                    }}>
                        Building <span style={{ color: "var(--primary-energy)" }}>Calm</span>,<br />
                        Powering <span style={{ color: "var(--professional-navy)" }}>Technology</span>.
                    </h2>
                    <p style={{
                        fontSize: "1.1rem",
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
