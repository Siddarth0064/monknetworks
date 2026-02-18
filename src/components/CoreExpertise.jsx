import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const expertiseData = [
    { title: "Network Architecture", description: "Designing robust, scalable backbones for enterprise connectivity.", year: "FOUNDATION" },
    { title: "Cloud Integration", description: "Seamless migration and management of hybrid cloud ecosystems.", year: "GROWTH" },
    { title: "Cybersecurity", description: "Zero-trust protocols and reactive threat mitigation systems.", year: "PROTECTION" },
    { title: "AI Automation", description: "Intelligent workflows enabling next-gen operational efficiency.", year: "FUTURE" }
];

const CoreExpertise = () => {
    return (
        <section style={{ padding: "100px 5%", position: "relative" }}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ textAlign: "center", marginBottom: "5rem" }}
            >
                <h2 style={{ fontSize: "2.5rem", color: "white", fontFamily: "Orbitron, sans-serif" }}>
                    CORE <span style={{ color: "var(--primary-energy)" }}>EXPERTISE</span>
                </h2>
            </motion.div>

            <div style={{ maxWidth: "1000px", margin: "0 auto", position: "relative" }}>
                {/* Vertical Line */}
                <div style={{
                    position: "absolute",
                    left: "50%",
                    top: "0",
                    bottom: "0",
                    width: "2px",
                    background: "rgba(255,255,255,0.1)",
                    transform: "translateX(-50%)"
                }}>
                    <motion.div
                        initial={{ height: "0%" }}
                        whileInView={{ height: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        style={{
                            width: "100%",
                            background: "var(--primary-energy)",
                            boxShadow: "0 0 10px var(--primary-energy)"
                        }}
                    />
                </div>

                {expertiseData.map((item, index) => (
                    <div key={index} style={{
                        display: "flex",
                        justifyContent: index % 2 === 0 ? "flex-end" : "flex-start",
                        position: "relative",
                        paddingBottom: "80px",
                        alignItems: "center"
                    }}>

                        {/* Center Node */}
                        <div style={{
                            position: "absolute",
                            left: "50%",
                            top: "0",
                            width: "20px",
                            height: "20px",
                            background: "#0B1220",
                            border: "2px solid var(--primary-energy)",
                            borderRadius: "50%",
                            transform: "translate(-50%, 0%)",
                            zIndex: 2,
                            boxShadow: "0 0 15px rgba(240, 90, 40, 0.5)"
                        }} />

                        <motion.div
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            style={{
                                width: "45%",
                                textAlign: index % 2 === 0 ? "right" : "left",
                                padding: "0 40px"
                            }}
                        >
                            <span style={{
                                display: "block",
                                fontSize: "0.9rem",
                                color: "var(--primary-energy)",
                                fontWeight: "bold",
                                marginBottom: "5px",
                                letterSpacing: "2px"
                            }}>
                                {item.year}
                            </span>
                            <h3 style={{ fontSize: "1.8rem", color: "white", marginBottom: "10px" }}>{item.title}</h3>
                            <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: "1.6" }}>{item.description}</p>
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CoreExpertise;
