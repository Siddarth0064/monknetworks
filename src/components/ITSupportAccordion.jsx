import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';

const supportData = [
    { question: "24/7 Monitoring & Alerting", answer: "Real-time surveillance of your systems to detect and neutralize threats before they impact business operations." },
    { question: "Help Desk Support", answer: "Dedicated teams available round-the-clock to resolve user issues, ensuring seamless productivity." },
    { question: "On-Site Hardware Maintenance", answer: "Physical support for server racks, networking equipment, and workstations delivered by expert field technicians." },
    { question: "Software Patch Management", answer: "Automated updates and security patching to keep your software ecosystem resilient against vulnerabilities." }
];

const ITSupportAccordion = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section style={{ padding: "100px 5%" }}>
            <div className="container" style={{ maxWidth: "900px", margin: "0 auto" }}>

                <h2 style={{ fontSize: "2.5rem", color: "white", textAlign: "center", marginBottom: "3rem", fontFamily: "Orbitron, sans-serif" }}>
                    IT <span style={{ color: "var(--primary-energy)" }}>SUPPORT</span>
                </h2>

                <div>
                    {supportData.map((item, index) => (
                        <div key={index} style={{ marginBottom: "1rem" }}>
                            <motion.button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                animate={{
                                    backgroundColor: activeIndex === index ? "rgba(240, 90, 40, 0.1)" : "rgba(30, 58, 95, 0.1)",
                                    borderColor: activeIndex === index ? "var(--primary-energy)" : "rgba(255,255,255,0.1)"
                                }}
                                style={{
                                    width: "100%",
                                    padding: "20px 30px",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    border: "1px solid",
                                    borderRadius: "8px",
                                    cursor: "pointer",
                                    color: "white",
                                    fontSize: "1.2rem",
                                    textAlign: "left",
                                    outline: "none"
                                }}
                            >
                                <span style={{ fontWeight: "600" }}>{item.question}</span>
                                <motion.span
                                    animate={{ rotate: activeIndex === index ? 45 : 0 }}
                                    style={{ color: "var(--primary-energy)" }}
                                >
                                    <FaPlus />
                                </motion.span>
                            </motion.button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        style={{ overflow: "hidden" }}
                                    >
                                        <div style={{ padding: "20px 30px", color: "rgba(255,255,255,0.7)", lineHeight: "1.6" }}>
                                            {item.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ITSupportAccordion;
