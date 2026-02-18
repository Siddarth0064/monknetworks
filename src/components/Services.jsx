import React from "react";
import { motion } from "framer-motion";
import { FaServer, FaShieldAlt, FaCloud, FaDatabase, FaUsers, FaBullseye, FaArrowRight } from "react-icons/fa";

// Enterprise Service Data
const servicesData = [
    {
        title: "Managed Infrastructure",
        description: "Proactive monitoring and maintenance ensuring 99.99% critical uptime.",
        icon: <FaServer />
    },
    {
        title: "Advanced Security",
        description: "Zero-trust architecture and real-time threat detection systems.",
        icon: <FaShieldAlt />
    },
    {
        title: "Cloud Solutions",
        description: "Scalable hybrid cloud environments optimized for performance.",
        icon: <FaCloud />
    },
    {
        title: "Data Intelligence",
        description: "Secure database management and high-availability storage clusters.",
        icon: <FaDatabase />
    },
    {
        title: "Unified Collaboration",
        description: "Seamless communication tools integrated for global teams.",
        icon: <FaUsers />
    },
    {
        title: "Strategic Consulting",
        description: "Digital transformation roadmaps aligned with business goals.",
        icon: <FaBullseye />
    }
];

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
    }
};

const Services = () => {
    return (
        <section id="services" style={{ padding: "100px 5%", minHeight: "100vh", position: "relative" }}>
            <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                    style={{ textAlign: "center", marginBottom: "5rem" }}
                >
                    <h2 style={{
                        fontSize: "2.5rem",
                        marginBottom: "1rem",
                        color: "white",
                        letterSpacing: "1px",
                        fontFamily: "Orbitron, sans-serif"
                    }}>
                        OUR <span style={{ color: "var(--primary-energy)" }}>SERVICES</span>
                    </h2>
                    <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.7)", maxWidth: "600px", margin: "0 auto" }}>
                        Comprehensive IT solutions designed for the modern enterprise.
                    </p>
                </motion.div>

                {/* Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ staggerChildren: 0.15 }}
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                        gap: "2rem"
                    }}
                >
                    {servicesData.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{
                                y: -6,
                                boxShadow: "0px 10px 25px rgba(240,90,40,0.25)",
                                borderColor: "var(--primary-energy)"
                            }}
                            style={{
                                background: "rgba(30, 58, 95, 0.2)",
                                backdropFilter: "blur(10px)",
                                padding: "2.5rem",
                                borderRadius: "12px",
                                border: "1px solid rgba(255, 255, 255, 0.05)",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                cursor: "pointer",
                                transition: "border-color 0.3s ease"
                            }}
                        >
                            <div style={{
                                fontSize: "2rem",
                                color: "var(--primary-energy)",
                                marginBottom: "1.5rem",
                                background: "rgba(240, 90, 40, 0.1)",
                                padding: "15px",
                                borderRadius: "8px",
                                display: "inline-flex"
                            }}>
                                {service.icon}
                            </div>

                            <h3 style={{
                                fontSize: "1.4rem",
                                color: "white",
                                marginBottom: "1rem",
                                fontFamily: "Orbitron, sans-serif"
                            }}>
                                {service.title}
                            </h3>

                            <p style={{
                                fontSize: "1rem",
                                color: "rgba(255, 255, 255, 0.7)",
                                lineHeight: "1.6",
                                marginBottom: "2rem",
                                flex: 1
                            }}>
                                {service.description}
                            </p>

                            <div style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                                color: "var(--primary-energy)",
                                fontWeight: "600",
                                fontSize: "0.9rem"
                            }}>
                                EXPLORE <FaArrowRight size={12} />
                            </div>

                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default Services;
