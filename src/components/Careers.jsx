import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaArrowRight } from "react-icons/fa";

const jobs = [
    { title: "Senior Network Engineer", location: "Bangalore, India", type: "Full-time" },
    { title: "Cloud Architecture Specialist", location: "Remote", type: "Contract" },
    { title: "Cybersecurity Analyst", location: "Bangalore, India", type: "Full-time" },
    { title: "Frontend Developer (React)", location: "Bangalore, India", type: "Full-time" },
    { title: "DevOps Engineer", location: "New York, USA", type: "Full-time" }
];

const Careers = () => {
    return (
        <section id="careers" style={{ padding: "100px 20px", background: "#0a0a0a" }}>
            <div className="container">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "50px" }}>
                    <div>
                        <h2 style={{ fontSize: "2.5rem", color: "white" }}>Join Our <span style={{ color: "#00f2ea" }}>Team</span></h2>
                        <p style={{ color: "#a0a0a0", marginTop: "10px" }}>Innovate with the best minds in the industry.</p>
                    </div>
                    <button style={{
                        padding: "10px 20px",
                        background: "transparent",
                        border: "1px solid #00f2ea",
                        color: "#00f2ea",
                        borderRadius: "20px",
                        cursor: "pointer"
                    }}>
                        View All Openings
                    </button>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    {jobs.map((job, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{
                                scale: 1.02,
                                backgroundColor: "rgba(0, 242, 234, 0.05)",
                                borderLeft: "5px solid #00f2ea",
                                paddingLeft: "35px"
                            }}
                            style={{
                                background: "#121212",
                                padding: "30px",
                                borderRadius: "10px",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                cursor: "pointer",
                                border: "1px solid #222",
                                transition: "all 0.3s ease",
                                borderLeft: "5px solid transparent" // for smooth transition
                            }}
                        >
                            <div>
                                <h3 style={{ fontSize: "1.4rem", color: "white", marginBottom: "5px" }}>{job.title}</h3>
                                <p style={{ color: "#777", fontSize: "0.9rem" }}>
                                    <FaBriefcase style={{ marginRight: "8px", verticalAlign: "middle" }} />
                                    {job.location} • {job.type}
                                </p>
                            </div>
                            <div style={{ color: "#00f2ea", fontSize: "1.2rem" }}>
                                <FaArrowRight />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Careers;
