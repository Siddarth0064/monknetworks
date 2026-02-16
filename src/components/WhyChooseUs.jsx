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
    return (
        <section id="whyus" style={{ padding: "100px 20px", background: "#050505" }}>
            <div className="container">

                {/* Stats Section */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-around",
                        flexWrap: "wrap",
                        marginBottom: "80px",
                        gap: "30px"
                    }}
                >
                    {stats.map((stat) => (
                        <div key={stat.id} style={{ textAlign: "center", minWidth: "150px" }}>
                            <div style={{ fontSize: "2rem", color: "#333", marginBottom: "10px" }}>{stat.icon}</div>
                            <h3 style={{ fontSize: "3rem", fontWeight: "bold", color: "white", marginBottom: "5px" }}>
                                <CountUp end={stat.number} duration={2.5} enableScrollSpy />
                                <span style={{ color: "#00f2ea" }}>{stat.suffix}</span>
                            </h3>
                            <p style={{ color: "#a0a0a0", fontSize: "1.2rem", textTransform: "uppercase", letterSpacing: "1px" }}>{stat.label}</p>
                        </div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: "center", marginBottom: "60px" }}
                >
                    <h2 style={{ fontSize: "2.5rem", color: "white", marginBottom: "1rem" }}>WHY CHOOSE US?</h2>
                    <p style={{ fontSize: "1.2rem", color: "#a0a0a0" }}>Built for Impact. Chosen for Excellence.</p>
                </motion.div>

                {/* Cards Section */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ y: -10, boxShadow: `0 10px 30px ${card.color}20` }}
                            style={{
                                background: "#121212",
                                padding: "40px",
                                borderRadius: "15px",
                                borderTop: `4px solid ${card.color}`,
                                textAlign: "left"
                            }}
                        >
                            <div style={{ fontSize: "2.5rem", color: card.color, marginBottom: "20px" }}>
                                {card.icon}
                            </div>
                            <h3 style={{ fontSize: "1.5rem", color: "white", marginBottom: "15px" }}>{card.title}</h3>
                            <p style={{ color: "#a0a0a0", lineHeight: "1.6" }}>{card.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
