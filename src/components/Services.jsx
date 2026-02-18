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

const Services = () => {
    return (
        <section id="services" style={{ padding: "120px 5%", position: "relative", minHeight: "100vh" }}>
            <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>

                {/* Header with Animated Gradient Text */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: "center", marginBottom: "6rem" }}
                >
                    <motion.h2
                        style={{
                            fontSize: "3rem",
                            marginBottom: "1rem",
                            color: "white",
                            letterSpacing: "-1px",
                            fontFamily: "Orbitron, sans-serif",
                            display: "inline-block",
                            background: "linear-gradient(90deg, #ffffff, #a5f3fc, #ffffff)",
                            backgroundSize: "200% auto",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                        }}
                        animate={{ backgroundPosition: ["0% center", "200% center"] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    >
                        Enterprise <span style={{ color: "var(--primary-energy)", WebkitTextFillColor: "var(--primary-energy)" }}>Ecosystem</span>
                    </motion.h2>

                    {/* Glowing Expanding Underline */}
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100px" }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        style={{ height: "3px", background: "var(--primary-energy)", margin: "10px auto", boxShadow: "0 0 10px var(--primary-energy)" }}
                    />

                    <p style={{ fontSize: "1.2rem", color: "rgba(255,255,255,0.6)", maxWidth: "600px", margin: "20px auto 0" }}>
                        Intelligent modules designed for the modern digital infrastructure.
                    </p>
                </motion.div>

                {/* Floating Glass Grid */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
                    gap: "30px",
                }}>
                    {servicesData.map((service, index) => (
                        <ServicePanel key={index} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ServicePanel = ({ service, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
            // Breathing Animation
            animate={{ y: [0, -6, 0] }}
            // We use a separate transition for the loop to avoid conflict with entrance
            // Ideally we'd wrap this, but framer motion handles it by overriding if not careful. 
            // Better approach: Use a wrapper for entrance, inner for float.
            // Simplified here: we'll use the style prop for float or just accept the override after entrance.
            // Let's use a wrapper for the structure to be safe.
            style={{ height: "100%" }}
        >
            <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                style={{
                    position: "relative",
                    height: "100%",
                    borderRadius: "20px",
                    overflow: "hidden",
                    // Glassmorphism Base
                    background: "rgba(11, 18, 32, 0.7)",
                    backdropFilter: "blur(20px)",
                    // Gradient Border Logic (Simulated via box-shadow used as border or background trick)
                    // Using subtle border for cleaner code
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                    display: "flex",
                    flexDirection: "column",
                    padding: "3rem 2.5rem",
                    transition: "all 0.4s cubic-bezier(0.25, 1, 0.5, 1)"
                }}
                whileHover={{
                    y: -10, // Lift on hover
                    borderColor: "rgba(240, 90, 40, 0.5)", // Orange-ish glow
                    boxShadow: "0 20px 40px rgba(0,0,0,0.5), 0 0 20px rgba(240, 90, 40, 0.1)" // Ambient glow
                }}
            >
                {/* Light Sweep (Sheen) Overlay */}
                <motion.div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: -100, // Start off-screen
                        width: "50%",
                        height: "100%",
                        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)",
                        transform: "skewX(-25deg)",
                        pointerEvents: "none"
                    }}
                    variants={{
                        hover: { left: "150%", transition: { duration: 0.8, ease: "easeInOut" } }
                    }}
                />

                {/* Orb Icon */}
                <div style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle at center, rgba(240, 90, 40, 0.25), transparent 70%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "2rem",
                    border: "1px solid rgba(240, 90, 40, 0.1)",
                    boxShadow: "0 0 15px rgba(240, 90, 40, 0.05)"
                }}>
                    <span style={{ fontSize: "1.8rem", color: "var(--primary-energy)", filter: "drop-shadow(0 0 5px rgba(240,90,40,0.5))" }}>
                        {service.icon}
                    </span>
                </div>

                <h3 style={{
                    fontSize: "1.6rem",
                    color: "white",
                    marginBottom: "1rem",
                    fontFamily: "Orbitron, sans-serif",
                    letterSpacing: "0.5px"
                }}>
                    {service.title}
                </h3>

                <p style={{
                    fontSize: "1rem",
                    color: "rgba(255, 255, 255, 0.65)",
                    lineHeight: "1.7",
                    marginBottom: "2.5rem",
                    flex: 1
                }}>
                    {service.description}
                </p>

                <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    color: "var(--primary-energy)",
                    fontWeight: "700",
                    fontSize: "0.9rem",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    cursor: "pointer"
                }}>
                    Initialize Node <FaArrowRight size={12} />
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Services;
