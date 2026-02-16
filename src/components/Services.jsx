import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCloud, FaServer, FaIdBadge, FaUsers, FaUserTie, FaArrowRight } from "react-icons/fa";

const servicesData = [
    {
        id: "management",
        title: "Managed Services",
        icon: <FaServer />,
        color: "#00f2ea",
        cards: [
            {
                title: "Infrastructure Management",
                description: "Proactive monitoring and maintenance of your critical server infrastructure to ensure maximum uptime.",
                img: null // Placeholder
            },
            {
                title: "Network Security",
                description: "Advanced threat detection and prevention strategies to safeguard your data assets.",
                img: null
            },
            {
                title: "Disaster Recovery",
                description: "Robust data backup and recovery solutions to keep your business running during unexpected outages.",
                img: null
            }
        ]
    },
    {
        id: "cloud",
        title: "Cloud Services",
        icon: <FaCloud />,
        color: "#007bff",
        cards: [
            {
                title: "Cloud Managed Services",
                description: "Streamline cloud operations with expert management, monitoring, and optimization.",
                img: "/images/cloud_managed.png"
            },
            {
                title: "Cloud Transformation Office",
                description: "Strategize and execute cloud adoption with expert guidance and governance.",
                img: "/images/cloud_transformation.png"
            },
            {
                title: "Cloud FinOps",
                description: "Optimize cloud costs, maximize efficiency, and gain financial control over cloud spending.",
                img: "/images/cloud_finops.png"
            }
        ]
    },
    {
        id: "collaboration",
        title: "Unified Collaborations",
        icon: <FaUsers />,
        color: "#ff0055",
        cards: [
            {
                title: "Video Conferencing",
                description: "High-definition, low-latency video solutions for seamless global team meetings.",
                img: null
            },
            {
                title: "Team Messaging",
                description: "Secure, real-time messaging platforms integrated with your workflow tools.",
                img: null
            },
            {
                title: "Workspace Integration",
                description: "Unified dashboards bringing together email, chat, and project management.",
                img: null
            }
        ]
    },
    {
        id: "licensing",
        title: "Licensing Services",
        icon: <FaIdBadge />,
        color: "#bf00ff",
        cards: [
            {
                title: "Software Compliance",
                description: "Ensure your organization meets all legal requirements and avoids costly penalties.",
                img: null
            },
            {
                title: "Volume Licensing",
                description: "Cost-effective bulk licensing strategies for enterprise software suites.",
                img: null
            },
            {
                title: "License Optimization",
                description: "Analyze usage patterns to eliminate waste and reduce recurring software costs.",
                img: null
            }
        ]
    },
    {
        id: "professional",
        title: "Professional Services",
        icon: <FaUserTie />,
        color: "#ffaa00",
        cards: [
            {
                title: "IT Consulting",
                description: "Strategic advice to align your technology infrastructure with business goals.",
                img: null
            },
            {
                title: "Project Management",
                description: "End-to-end delivery of complex technical projects on time and within budget.",
                img: null
            },
            {
                title: "Technical Audits",
                description: "Deep-dive analysis of your current systems to identify bottlenecks and risks.",
                img: null
            }
        ]
    }
];

const Services = () => {
    const [activeTab, setActiveTab] = useState(servicesData[1].id); // Default to Cloud as it has the images

    const activeService = servicesData.find(s => s.id === activeTab);

    return (
        <section id="services" style={{ padding: "80px 20px", backgroundColor: "#0a0a0a", minHeight: "100vh" }}>
            <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: "center", marginBottom: "4rem" }}
                >
                    <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem", color: "white", letterSpacing: "1px" }}>
                        SERVICES
                    </h2>
                    <p style={{ fontSize: "1.2rem", color: "#a0a0a0", maxWidth: "600px", margin: "0 auto" }}>
                        Tailored IT solutions that simplify operations, strengthen security, and connect your business.
                    </p>
                </motion.div>

                {/* Tabs */}
                <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginBottom: "50px", flexWrap: "wrap" }}>
                    {servicesData.map((service) => (
                        <button
                            key={service.id}
                            onClick={() => setActiveTab(service.id)}
                            style={{
                                padding: "12px 24px",
                                background: activeTab === service.id ? `linear-gradient(90deg, ${service.color}22, ${service.color}44)` : "#151515",
                                border: `1px solid ${activeTab === service.id ? service.color : "#333"}`,
                                borderRadius: "50px",
                                color: activeTab === service.id ? "white" : "#888",
                                fontSize: "1rem",
                                fontWeight: "600",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                                transition: "all 0.3s ease",
                                boxShadow: activeTab === service.id ? `0 0 15px ${service.color}30` : "none",
                                textTransform: "uppercase",
                                outline: "none"
                            }}
                        >
                            <span style={{ color: activeTab === service.id ? service.color : "inherit" }}>{service.icon}</span>
                            {service.title}
                        </button>
                    ))}
                </div>

                {/* Content Area - Cards Grid */}
                <div style={{ minHeight: "500px" }}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                                gap: "30px",
                                padding: "10px"
                            }}
                        >
                            {activeService.cards.map((card, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    whileHover={{ y: -10, boxShadow: `0 10px 30px ${activeService.color}20`, borderColor: activeService.color }}
                                    style={{
                                        background: "#121212",
                                        border: "1px solid #333",
                                        borderRadius: "20px",
                                        overflow: "hidden",
                                        display: "flex",
                                        flexDirection: "column",
                                        transition: "all 0.3s ease",
                                        height: "100%"
                                    }}
                                >
                                    {/* Card Image Area */}
                                    <div style={{
                                        height: "180px",
                                        width: "100%",
                                        background: card.img ? "black" : `linear-gradient(135deg, ${activeService.color}11, #000)`,
                                        borderBottom: "1px solid #222",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        overflow: "hidden"
                                    }}>
                                        {card.img ? (
                                            <img src={card.img} alt={card.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                        ) : (
                                            <span style={{ fontSize: "3rem", color: activeService.color, opacity: 0.5 }}>
                                                {activeService.icon}
                                            </span>
                                        )}
                                    </div>

                                    {/* Card Content */}
                                    <div style={{ padding: "25px", flex: 1, display: "flex", flexDirection: "column" }}>
                                        <h3 style={{ fontSize: "1.4rem", color: "white", marginBottom: "12px", minHeight: "3rem" }}>
                                            {card.title}
                                        </h3>
                                        <p style={{ fontSize: "1rem", color: "#aaa", lineHeight: "1.6", marginBottom: "20px", flex: 1 }}>
                                            {card.description}
                                        </p>
                                        <a
                                            href="#"
                                            style={{
                                                display: "inline-flex",
                                                alignItems: "center",
                                                gap: "8px",
                                                color: activeService.color,
                                                textDecoration: "none",
                                                fontWeight: "bold",
                                                marginTop: "auto",
                                                alignSelf: "flex-start"
                                            }}
                                        >
                                            Learn More <FaArrowRight size={12} />
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Services;
