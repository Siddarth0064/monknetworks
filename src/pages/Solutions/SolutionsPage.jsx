import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaCloud, FaServer, FaCogs, FaDatabase, FaArrowRight } from 'react-icons/fa';

const solutions = [
    {
        id: "managed-infra",
        title: "Managed Infrastructure",
        icon: <FaServer />,
        color: "var(--primary-energy)",
        desc: "End-to-end management of your enterprise hardware and software ecosystems.",
        details: "We provide comprehensive monitoring, maintenance, and optimization of your servers, storage, and networking equipment to ensure maximum performance and zero downtime.",
        benefits: ["99.99% Uptime Guarantee", "24/7 Proactive Monitoring", "Scalable Hardware Architecture"],
        diagram: "infra"
    },
    {
        id: "network-security",
        title: "Network Security",
        icon: <FaShieldAlt />,
        color: "#00f2ea",
        desc: "Fortifying your digital borders with advanced threat intelligence.",
        details: "Our security solutions encompass enterprise firewalls, intrusion detection systems, and real-time threat analysis to protect your data from internal and external vulnerabilities.",
        benefits: ["Zero-Trust Architecture", "Real-time Threat Mitigation", "Compliance Readiness"],
        diagram: "security"
    },
    {
        id: "cloud-solutions",
        title: "Cloud Solutions",
        icon: <FaCloud />,
        color: "#a0a0a0",
        desc: "Seamless migration and management of cloud-native environments.",
        details: "Whether hybrid, public, or private cloud, we design architectures that optimize cost and performance while maintaining high availability.",
        benefits: ["Multi-Cloud Strategy", "Automated Resource Scaling", "Cost Optimization"],
        diagram: "cloud"
    },
    {
        id: "data-intelligence",
        title: "Data Intelligence",
        icon: <FaDatabase />,
        color: "#f05a28",
        desc: "Turning raw data into actionable enterprise insights.",
        details: "We implement robust data pipelines and analytics engines that help you understand your business metrics and predict future trends with precision.",
        benefits: ["Predictive Analytics", "Data Warehouse Optimization", "Visual Insights Dashboards"],
        diagram: "data"
    },
    {
        id: "strategic-consulting",
        title: "Strategic Consulting",
        icon: <FaCogs />,
        color: "#ffffff",
        desc: "Expert guidance for your long-term digital transformation journey.",
        details: "Our consultants work with your leadership to align technology investments with business goals, ensuring every bit of spend delivers maximum ROI.",
        benefits: ["ROI-Focused Roadmap", "Technology Audit", "Digital Transformation Strategy"],
        diagram: "consulting"
    }
];

const SolutionsPage = () => {
    return (
        <div style={{ position: 'relative', width: '100%', minHeight: '100vh', background: 'transparent' }}>

            {/* Page Header: Kinetic Solution Hub */}
            <section style={{
                position: "relative",
                padding: "180px 5% 100px",
                textAlign: "center",
                background: "transparent",
                overflow: "hidden",
                perspective: "1200px" // Enable 3D perspective
            }}>

                {/* 1. Geometric Hologram Backdrop (3D Wireframe) */}
                <div style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "100%",
                    height: "100%",
                    zIndex: 0,
                    pointerEvents: "none",
                    opacity: 0.4
                }}>
                    <motion.div
                        initial={{ rotateX: 60, rotateZ: 0, opacity: 0 }}
                        animate={{
                            rotateX: [60, 50, 60],
                            rotateZ: 360,
                            opacity: [0, 0.5, 0.3]
                        }}
                        transition={{
                            rotateX: { duration: 10, repeat: Infinity, ease: "easeInOut" },
                            rotateZ: { duration: 60, repeat: Infinity, ease: "linear" },
                            opacity: { duration: 2 }
                        }}
                        style={{
                            width: "600px",
                            height: "600px",
                            margin: "0 auto",
                            border: "1px solid rgba(0, 242, 234, 0.15)",
                            borderRadius: "50%",
                            position: "relative",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                    >
                        {/* Nested Rings for Depth */}
                        {[...Array(3)].map((_, i) => (
                            <div key={i} style={{
                                position: "absolute",
                                inset: i * 60,
                                border: "1px dashed rgba(240, 90, 40, 0.1)",
                                borderRadius: "50%"
                            }} />
                        ))}
                    </motion.div>
                </div>

                {/* 2. Content Container (Staggered Entrance) */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2,
                                delayChildren: 0.5
                            }
                        }
                    }}
                    style={{ position: "relative", zIndex: 1 }}
                >
                    {/* Top Accent Line (Data Stream) */}
                    <motion.div
                        variants={{
                            hidden: { width: 0, opacity: 0 },
                            visible: { width: "100px", opacity: 1 }
                        }}
                        style={{
                            height: "2px",
                            background: "var(--primary-energy)",
                            margin: "0 auto 30px",
                            boxShadow: "0 0 15px var(--primary-energy)"
                        }}
                    />

                    <motion.h1
                        variants={{
                            hidden: { opacity: 0, rotateX: -30, y: 50, scale: 0.9 },
                            visible: {
                                opacity: 1,
                                rotateX: 0,
                                y: 0,
                                scale: 1,
                                transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
                            }
                        }}
                        style={{
                            fontSize: "4.5rem",
                            fontWeight: "900",
                            color: "white",
                            marginBottom: "20px",
                            fontFamily: "Orbitron, sans-serif",
                            textTransform: "uppercase",
                            letterSpacing: "-2px",
                            lineHeight: 1
                        }}
                    >
                        Enterprise <br />
                        <span style={{
                            color: "transparent",
                            WebkitTextStroke: "1px var(--primary-energy)",
                            textShadow: "0 0 30px rgba(240, 90, 40, 0.2)"
                        }}>
                            Solutions
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.8 }
                            }
                        }}
                        style={{
                            fontSize: "1.25rem",
                            color: "rgba(255,255,255,0.6)",
                            maxWidth: "700px",
                            margin: "0 auto",
                            lineHeight: "1.6",
                            fontWeight: "400"
                        }}
                    >
                        Powering the modern enterprise with resilient, scalable, and intelligent technology infrastructures that redefine the boundaries of innovation.
                    </motion.p>
                </motion.div>
            </section>

            {/* Solutions List */}
            <section style={{ padding: "60px 5% 100px" }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                    {solutions.map((sol, index) => (
                        <motion.div
                            key={sol.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            style={{
                                display: "grid",
                                gridTemplateColumns: index % 2 === 0 ? "1.2fr 1fr" : "1fr 1.2fr",
                                gap: "80px",
                                alignItems: "center",
                                marginBottom: "120px"
                            }}
                        >
                            {/* Text Content */}
                            <div style={{ order: index % 2 === 0 ? 1 : 2 }}>
                                <div style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "15px",
                                    marginBottom: "20px",
                                    color: sol.color
                                }}>
                                    <span style={{ fontSize: "2rem" }}>{sol.icon}</span>
                                    <h2 style={{ fontSize: "2.5rem", color: "white", margin: 0 }}>{sol.title}</h2>
                                </div>
                                <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.8)", lineHeight: "1.8", marginBottom: "30px" }}>
                                    {sol.details}
                                </p>

                                <div style={{ marginBottom: "40px" }}>
                                    <h4 style={{ color: "white", marginBottom: "15px", fontSize: "1.2rem" }}>Key Benefits:</h4>
                                    <ul style={{ listStyle: "none", padding: 0 }}>
                                        {sol.benefits.map((benefit, i) => (
                                            <li key={i} style={{
                                                color: "rgba(255,255,255,0.7)",
                                                marginBottom: "10px",
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "10px"
                                            }}>
                                                <FaArrowRight style={{ color: sol.color, fontSize: "0.8rem" }} />
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <motion.button
                                    whileHover={{ x: 10 }}
                                    style={{
                                        padding: "12px 30px",
                                        background: "transparent",
                                        border: `1px solid ${sol.color}`,
                                        color: sol.color,
                                        borderRadius: "50px",
                                        cursor: "pointer",
                                        fontWeight: "600",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "10px"
                                    }}
                                >
                                    Discuss this Solution <FaArrowRight />
                                </motion.button>
                            </div>

                            {/* Diagram Interaction / Visual */}
                            <div style={{
                                order: index % 2 === 0 ? 2 : 1,
                                height: "350px",
                                background: "rgba(255,255,255,0.02)",
                                borderRadius: "30px",
                                border: "1px solid rgba(255,255,255,0.05)",
                                position: "relative",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                overflow: "hidden"
                            }}>
                                {/* Abstract Diagram Placeholder */}
                                <div style={{
                                    width: "200px",
                                    height: "200px",
                                    border: `2px dashed ${sol.color}`,
                                    borderRadius: "50%",
                                    opacity: 0.3,
                                    position: "absolute"
                                }} />
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                    style={{
                                        width: "250px",
                                        height: "250px",
                                        border: `1px solid ${sol.color}`,
                                        borderRadius: "50%",
                                        opacity: 0.1,
                                    }}
                                />
                                <div style={{ fontSize: "5rem", color: sol.color, opacity: 0.8 }}>
                                    {sol.icon}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section style={{
                padding: "100px 5%",
                textAlign: "center",
                background: "rgba(240, 90, 40, 0.05)",
                borderTop: "1px solid rgba(240, 90, 40, 0.1)"
            }}>
                <h2 style={{ fontSize: "2.5rem", color: "white", marginBottom: "30px" }}>Unsure which solution fits your business?</h2>
                <button style={{
                    padding: "18px 45px",
                    background: "var(--primary-energy)",
                    color: "white",
                    border: "none",
                    borderRadius: "50px",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    cursor: "pointer"
                }}>
                    Speak to our Experts
                </button>
            </section>

        </div>
    );
};

export default SolutionsPage;
