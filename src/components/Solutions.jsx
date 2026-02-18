import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaServer, FaCloud, FaShieldAlt } from 'react-icons/fa';

const solutionsData = [
    {
        icon: <FaServer />,
        title: "Infrastructure Management",
        description: "Optimized server ecosystems ensuring 99.99% uptime with intelligent load balancing."
    },
    {
        icon: <FaCloud />,
        title: "Cloud Solutions",
        description: "Scalable cloud architecture designed for flexibility and rapid deployment."
    },
    {
        icon: <FaShieldAlt />,
        title: "Enterprise Security",
        description: "Advanced threat protection and real-time monitoring for your digital assets."
    }
];

const Solutions = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]); // Parallax effect

    return (
        <section
            ref={containerRef}
            id="solutions"
            style={{
                padding: "8rem 5%",
                position: "relative",
                backgroundColor: "transparent", // Handled by ScrollLayout
                color: "var(--text-light)",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                style={{ textAlign: "center", marginBottom: "4rem" }}
            >
                <h2 style={{
                    fontSize: "2.5rem",
                    marginBottom: "1rem",
                    background: "linear-gradient(to right, var(--primary-energy), var(--accent-glow))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                }}>
                    Our Solutions
                </h2>
                <p style={{ maxWidth: "600px", margin: "0 auto", opacity: 0.8 }}>
                    Empowering businesses with resilient and scalable technology infrastructure.
                </p>
            </motion.div>

            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "2rem",
                width: "100%",
                maxWidth: "1200px"
            }}>
                {solutionsData.map((solution, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        whileHover={{ y: -10, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
                        style={{
                            background: "rgba(30, 58, 95, 0.3)", // Navy tint
                            backdropFilter: "blur(10px)",
                            padding: "2.5rem",
                            borderRadius: "15px",
                            border: "1px solid rgba(255, 255, 255, 0.05)",
                            textAlign: "center",
                            position: "relative",
                            overflow: "hidden"
                        }}
                    >
                        {/* Glow Effect */}
                        <div style={{
                            position: "absolute",
                            top: "-50%",
                            left: "-50%",
                            width: "200%",
                            height: "200%",
                            background: "radial-gradient(circle, rgba(240, 90, 40, 0.05) 0%, transparent 70%)",
                            pointerEvents: "none"
                        }} />

                        <div style={{
                            fontSize: "2.5rem",
                            color: "var(--primary-energy)",
                            marginBottom: "1.5rem",
                            filter: "drop-shadow(0 0 10px rgba(240, 90, 40, 0.3))"
                        }}>
                            {solution.icon}
                        </div>
                        <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "white" }}>
                            {solution.title}
                        </h3>
                        <p style={{ color: "rgba(255, 255, 255, 0.7)", lineHeight: "1.6" }}>
                            {solution.description}
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* Connection Line Destination Checkpoint */}
            <div id="solutions-end" style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "2px", height: "1px" }} />
        </section>
    );
};

export default Solutions;
