import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = {
    "Development": ["React.js", "Node.js", "Python", "TypeScript", "Next.js"],
    "Cloud & DevOps": ["AWS", "Azure", "Docker", "Kubernetes", "Terraform"],
    "Security": ["SentinelOne", "CrowdStrike", "Splunk", "Zero Trust", "Firewalls"],
    "Database": ["PostgreSQL", "MongoDB", "Redis", "Oracle", "SQL Server"]
};

const TechMatrix = () => {
    const [activeTab, setActiveTab] = useState("Development");

    return (
        <section style={{ padding: "100px 5%" }}>
            <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>

                <h2 style={{ fontSize: "2.5rem", color: "white", textAlign: "center", marginBottom: "3rem", fontFamily: "Orbitron, sans-serif" }}>
                    TECH <span style={{ color: "var(--primary-energy)" }}>PROFICIENCIES</span>
                </h2>

                {/* Tabs */}
                <div style={{ display: "flex", justifyContent: "center", gap: "2rem", marginBottom: "3rem", flexWrap: "wrap" }}>
                    {Object.keys(categories).map((tab) => (
                        <div key={tab} style={{ position: "relative" }}>
                            <button
                                onClick={() => setActiveTab(tab)}
                                style={{
                                    background: "transparent",
                                    border: "none",
                                    color: activeTab === tab ? "white" : "rgba(255,255,255,0.5)",
                                    fontSize: "1.2rem",
                                    cursor: "pointer",
                                    padding: "10px 20px",
                                    transition: "color 0.3s"
                                }}
                            >
                                {tab}
                            </button>
                            {activeTab === tab && (
                                <motion.div
                                    layoutId="underline"
                                    style={{
                                        position: "absolute",
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        height: "2px",
                                        background: "var(--primary-energy)",
                                        boxShadow: "0 0 10px var(--primary-energy)"
                                    }}
                                />
                            )}
                        </div>
                    ))}
                </div>

                {/* Grid */}
                <div style={{
                    background: "rgba(30,58,95,0.2)",
                    borderRadius: "20px",
                    padding: "3rem",
                    border: "1px solid rgba(255,255,255,0.05)",
                    minHeight: "300px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4 }}
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                                gap: "2rem",
                                width: "100%",
                                textAlign: "center"
                            }}
                        >
                            {categories[activeTab].map((tech, i) => (
                                <motion.div
                                    key={tech}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    style={{
                                        background: "rgba(255,255,255,0.03)",
                                        padding: "1.5rem",
                                        borderRadius: "10px",
                                        border: "1px solid rgba(255,255,255,0.1)",
                                        color: "var(--tech-cyan)",
                                        fontSize: "1.1rem",
                                        fontWeight: "600"
                                    }}
                                >
                                    {tech}
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
};

export default TechMatrix;
