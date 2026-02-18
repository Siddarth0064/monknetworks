import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = {
    "Development": ["React.js", "Node.js", "Python", "TypeScript", "Next.js", "GoLang", "GraphQL"],
    "Cloud & DevOps": ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "Ansible", "CI/CD"],
    "Security": ["SentinelOne", "CrowdStrike", "Splunk", "Zero Trust", "Firewalls", "Darktrace"],
    "Database": ["PostgreSQL", "MongoDB", "Redis", "Oracle", "SQL Server", "DynamoDB"]
};

// Colors for category themes
const categoryColors = {
    "Development": "#61dafb", // React Blue
    "Cloud & DevOps": "#F05A28", // Orange
    "Security": "#10b981", // Emerald 
    "Database": "#f59e0b" // Amber
};

const TechMatrix = () => {
    const [activeTab, setActiveTab] = useState("Development");

    return (
        <section style={{ padding: "100px 5%", minHeight: "80vh", position: "relative", overflow: "hidden" }}>

            {/* Background Nebula Effect */}
            <div style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "80vw",
                height: "80vw",
                background: `radial-gradient(circle, ${categoryColors[activeTab]}20 0%, transparent 70%)`,
                filter: "blur(60px)",
                opacity: 0.5,
                transition: "background 1s ease",
                zIndex: 0,
                pointerEvents: "none"
            }} />

            <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: "center", marginBottom: "4rem" }}
                >
                    <h2 style={{
                        fontSize: "2.5rem",
                        marginBottom: "1rem",
                        color: "white",
                        fontFamily: "Orbitron, sans-serif",
                        letterSpacing: "2px"
                    }}>
                        TECHNOLOGY <span style={{ color: categoryColors[activeTab], transition: "color 0.5s" }}>CONSTELLATION</span>
                    </h2>
                    <p style={{ color: "rgba(255,255,255,0.6)" }}>
                        Exploring the universe of our technical capabilities.
                    </p>
                </motion.div>

                {/* Cyber-HUD Tabs */}
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "1.5rem",
                    marginBottom: "4rem",
                    flexWrap: "wrap"
                }}>
                    {Object.keys(categories).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            style={{
                                background: activeTab === tab ? "rgba(255,255,255,0.1)" : "transparent",
                                border: `1px solid ${activeTab === tab ? categoryColors[tab] : "rgba(255,255,255,0.1)"}`,
                                color: activeTab === tab ? "white" : "rgba(255,255,255,0.5)",
                                padding: "12px 24px",
                                borderRadius: "30px",
                                cursor: "pointer",
                                fontSize: "1rem",
                                fontWeight: "500",
                                letterSpacing: "1px",
                                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                textTransform: "uppercase",
                                outline: "none",
                                boxShadow: activeTab === tab ? `0 0 20px ${categoryColors[tab]}40` : "none"
                            }}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Holographic Node Cloud */}
                <div style={{
                    minHeight: "400px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    perspective: "1000px" // Adds depth
                }}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, filter: "blur(10px)", transition: { duration: 0.3 } }}
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                justifyContent: "center",
                                gap: "2rem",
                                maxWidth: "900px"
                            }}
                        >
                            {categories[activeTab].map((tech, i) => (
                                <TechNode
                                    key={tech}
                                    tech={tech}
                                    index={i}
                                    color={categoryColors[activeTab]}
                                />
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
};

const TechNode = ({ tech, index, color }) => {
    // Generate random float animation params for organic feel AFTER landing
    const floatDuration = 3 + Math.random() * 2;
    const floatDelay = Math.random() * 2;

    // Generate random entrance scatter positions (off-center)
    // We modify this to be quite dramatic for the "fly in" feel
    const randomX = (Math.random() - 0.5) * 600; // -300 to 300px offset horizontally
    const randomY = (Math.random() - 0.5) * 500; // -250 to 250px offset vertically

    return (
        <motion.div
            layout
            initial={{ opacity: 0, x: randomX, y: randomY, scale: 0 }}
            animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0, transition: { duration: 0.2 } }}
            transition={{
                type: "spring",
                stiffness: 120,    // Higher stiffness for quicker snap
                damping: 12,       // Low damping for bounce effect
                mass: 1,
                delay: index * 0.05 // Stagger for sequential arrival
            }}
            style={{ position: "relative", zIndex: 1 }}
        >
            {/* Inner Float Wrapper - Keeps the gentle float separate from the layout spring */}
            <motion.div
                animate={{
                    y: [0, -10, 0] // Gentle vertical float
                }}
                transition={{
                    duration: floatDuration,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: floatDelay
                }}
                whileHover={{ scale: 1.15, zIndex: 10 }}
                style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "140px",
                    height: "140px",
                    borderRadius: "50%",
                    background: "rgba(11, 18, 32, 0.4)",
                    backdropFilter: "blur(5px)",
                    border: `1px solid ${color}30`,
                    boxShadow: `0 0 30px ${color}10, inset 0 0 20px ${color}05`,
                    cursor: "pointer",
                    transition: "box-shadow 0.3s"
                }}
            >
                {/* Spinning Orbit Ring (Decoration) */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10 + index, repeat: Infinity, ease: "linear" }}
                    style={{
                        position: "absolute",
                        inset: "10px",
                        borderRadius: "50%",
                        borderTop: `1px solid ${color}60`,
                        borderRight: `1px solid transparent`,
                        borderBottom: `1px solid transparent`,
                        borderLeft: `1px solid transparent`,
                    }}
                />

                <h4 style={{
                    color: "white",
                    fontSize: "1rem",
                    fontWeight: "600",
                    textAlign: "center",
                    zIndex: 2,
                    textShadow: `0 0 10px ${color}`
                }}>
                    {tech}
                </h4>

                {/* Simulated Connection Dot */}
                <div style={{
                    position: "absolute",
                    width: "6px",
                    height: "6px",
                    background: color,
                    borderRadius: "50%",
                    boxShadow: `0 0 10px ${color}`,
                    bottom: "20px"
                }} />

            </motion.div>
        </motion.div>
    );
};

export default TechMatrix;
