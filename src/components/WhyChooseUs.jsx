import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { FaProjectDiagram, FaUserTie, FaClock, FaRocket, FaShieldAlt, FaHandshake } from "react-icons/fa";

const stats = [
    { id: 1, number: 3500, label: "Projects", suffix: "+", icon: <FaProjectDiagram /> },
    { id: 2, number: 350, label: "Clients", suffix: "+", icon: <FaUserTie /> },
    { id: 3, number: 12, label: "Years", suffix: "+", icon: <FaClock /> },
];

const cards = [
    {
        title: "Built for Impact",
        text: "We engineer solutions that drive measurable business growth and efficiency.",
        icon: <FaRocket />,
        color: "#ff0055"
    },
    {
        title: "Chosen for Excellence",
        text: "Our track record speaks for itself. Trusted by industry leaders globally.",
        icon: <FaShieldAlt />,
        color: "#00f2ea"
    },
    {
        title: "Partnership Focused",
        text: "We work as an extension of your team, ensuring aligned goals and success.",
        icon: <FaHandshake />,
        color: "#007bff"
    },
];

const WhyChooseUs = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section id="whyus" style={{ padding: "120px 20px", background: "transparent", position: "relative" }}>
            <div className="container">

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: "center", marginBottom: "80px" }}
                >
                    <h2 style={{
                        fontSize: "3.5rem",
                        fontWeight: "800",
                        background: "linear-gradient(to bottom, #ffffff 0%, rgba(255,255,255,0.4) 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        marginBottom: "1rem",
                        letterSpacing: "-1px"
                    }}>
                        STRATEGIC IMPACT
                    </h2>
                    <p style={{
                        fontSize: "1.2rem",
                        color: "var(--primary-energy)",
                        fontWeight: "600",
                        letterSpacing: "4px",
                        textTransform: "uppercase"
                    }}>
                        Built for Impact. Chosen for Excellence.
                    </p>
                </motion.div>

                {/* Stats Section with Staggered Entrance */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        marginBottom: "100px",
                        gap: "60px"
                    }}
                >
                    {stats.map((stat) => (
                        <motion.div
                            key={stat.id}
                            variants={itemVariants}
                            style={{ textAlign: "center", minWidth: "200px" }}
                        >
                            <div style={{ fontSize: "2.5rem", color: "var(--primary-energy)", marginBottom: "15px", opacity: 0.8 }}>{stat.icon}</div>
                            <h3 style={{ fontSize: "4rem", fontWeight: "900", color: "white", marginBottom: "5px", letterSpacing: "-2px" }}>
                                <CountUp end={stat.number} duration={3} enableScrollSpy />
                                <span style={{ color: "var(--primary-energy)" }}>{stat.suffix}</span>
                            </h3>
                            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem", fontWeight: "600", textTransform: "uppercase", letterSpacing: "3px" }}>{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Cards Section with Glassmorphism */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "30px" }}
                >
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -15, scale: 1.02 }}
                            style={{
                                background: "rgba(255, 255, 255, 0.03)",
                                backdropFilter: "blur(12px)",
                                padding: "50px 40px",
                                borderRadius: "24px",
                                border: "1px solid rgba(255, 255, 255, 0.05)",
                                position: "relative",
                                overflow: "hidden",
                                display: "flex",
                                flexDirection: "column",
                                gap: "20px"
                            }}
                        >
                            {/* Decorative Corner Glow */}
                            <div style={{
                                position: "absolute",
                                top: 0,
                                right: 0,
                                width: "100px",
                                height: "100px",
                                background: `radial-gradient(circle at top right, ${card.color}22, transparent)`,
                                zIndex: 0
                            }} />

                            <div style={{ fontSize: "3rem", color: card.color, zIndex: 1 }}>
                                {card.icon}
                            </div>
                            <h3 style={{ fontSize: "1.8rem", fontWeight: "700", color: "white", zIndex: 1 }}>{card.title}</h3>
                            <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: "1.7", fontSize: "1.1rem", zIndex: 1 }}>{card.text}</p>

                            {/* Subtle Border Glow on Hover */}
                            <motion.div
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    borderRadius: "24px",
                                    border: `2px solid ${card.color}`,
                                    opacity: 0,
                                    pointerEvents: "none"
                                }}
                                whileHover={{ opacity: 0.3 }}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
