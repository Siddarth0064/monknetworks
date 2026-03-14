import React from 'react';
import GlobalOffices from '../../components/GlobalOffices';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import useMobile from '../../hooks/useMobile';

const ContactPage = () => {
    const isMobile = useMobile();
    return (
        <div style={{ position: 'relative', width: '100%', minHeight: '100vh', background: 'transparent' }}>

            {/* Header - "Signal Lock" Cinematic Hero */}
            <section style={{ padding: isMobile ? "100px 5% 40px" : "140px 5% 60px", textAlign: "center", position: "relative", overflow: "hidden" }}>

                {/* Decorative radial glow */}
                <div style={{
                    position: "absolute", top: "30%", left: "50%", transform: "translate(-50%, -50%)",
                    width: isMobile ? "300px" : "600px", height: isMobile ? "200px" : "400px",
                    background: "radial-gradient(ellipse, rgba(0,242,234,0.07) 0%, transparent 70%)",
                    pointerEvents: "none", zIndex: 0
                }} />

                {/* Scanning horizontal line */}
                <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: [0, 0.6, 0] }}
                    transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
                    style={{
                        position: "absolute", top: "50%", left: 0, right: 0,
                        height: "1px",
                        background: "linear-gradient(90deg, transparent, var(--primary-energy), transparent)",
                        zIndex: 1, pointerEvents: "none"
                    }}
                />

                {/* Status Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "28px", position: "relative", zIndex: 2 }}
                >
                    <motion.span
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        style={{
                            width: "8px", height: "8px", borderRadius: "50%",
                            background: "var(--primary-energy)",
                            boxShadow: "0 0 8px var(--primary-energy)",
                            display: "block", flexShrink: 0
                        }}
                    />
                    <span style={{
                        fontSize: "0.72rem", fontWeight: "700", letterSpacing: "3px",
                        textTransform: "uppercase", color: "var(--primary-energy)",
                        fontFamily: "Orbitron, sans-serif"
                    }}>CONNECTION ESTABLISHED</span>
                </motion.div>

                {/* Main Title — staggered word reveal */}
                <div style={{ position: "relative", zIndex: 2, overflow: "hidden", marginBottom: "8px" }}>
                    <motion.h1
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                        style={{
                            fontSize: "clamp(2.8rem, 6vw, 5rem)",
                            fontWeight: "900",
                            fontFamily: "Orbitron, sans-serif",
                            color: "white",
                            margin: 0,
                            lineHeight: 1.1,
                            letterSpacing: "-1px"
                        }}
                    >
                        Get in{" "}
                        <motion.span
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.75 }}
                            style={{
                                color: "transparent",
                                WebkitTextStroke: "2px var(--primary-energy)",
                                display: "inline-block"
                            }}
                        >Touch</motion.span>
                    </motion.h1>
                </div>

                {/* Subtle divider line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
                    style={{
                        width: "80px", height: "2px",
                        background: "linear-gradient(90deg, var(--primary-energy), #F05A28)",
                        margin: "24px auto",
                        borderRadius: "2px",
                        position: "relative", zIndex: 2
                    }}
                />

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                    style={{
                        fontSize: "1.1rem", color: "rgba(255,255,255,0.55)",
                        maxWidth: "560px", margin: "0 auto",
                        lineHeight: "1.8", position: "relative", zIndex: 2
                    }}
                >
                    Have a question or looking to start a project? We're here to help you{" "}
                    <span style={{ color: "rgba(255,255,255,0.85)" }}>navigate your digital journey.</span>
                </motion.p>

            </section>

            {/* Contact Grid */}
            <section style={{ padding: "60px 5% 100px" }}>
                <div style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    gap: isMobile ? "40px" : "60px"
                }}>
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{
                            background: "rgba(255,255,255,0.03)",
                            padding: isMobile ? "30px 20px" : "40px",
                            borderRadius: "20px",
                            border: "1px solid rgba(255,255,255,0.05)",
                            width: "100%"
                        }}
                    >
                        <h3 style={{ color: "white", fontSize: "1.8rem", marginBottom: "30px" }}>Send us a Message</h3>
                        <form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                            <input
                                type="text"
                                placeholder="Full Name"
                                style={{
                                    padding: "15px",
                                    borderRadius: "10px",
                                    background: "rgba(255,255,255,0.05)",
                                    border: "1px solid rgba(255,255,255,0.1)",
                                    color: "white",
                                    outline: "none"
                                }}
                            />
                            <input
                                type="email"
                                placeholder="Business Email"
                                style={{
                                    padding: "15px",
                                    borderRadius: "10px",
                                    background: "rgba(255,255,255,0.05)",
                                    border: "1px solid rgba(255,255,255,0.1)",
                                    color: "white",
                                    outline: "none"
                                }}
                            />
                            <select style={{
                                padding: "15px",
                                borderRadius: "10px",
                                background: "rgba(255,255,255,0.05)",
                                border: "1px solid rgba(255,255,255,0.1)",
                                color: "rgba(255,255,255,0.5)",
                                outline: "none"
                            }}>
                                <option>Select a Solution</option>
                                <option>Managed Infrastructure</option>
                                <option>Network Security</option>
                                <option>Cloud Solutions</option>
                                <option>Web/Digital Solutions</option>
                            </select>
                            <textarea
                                placeholder="Tell us about your requirements..."
                                rows="5"
                                style={{
                                    padding: "15px",
                                    borderRadius: "10px",
                                    background: "rgba(255,255,255,0.05)",
                                    border: "1px solid rgba(255,255,255,0.1)",
                                    color: "white",
                                    outline: "none",
                                    resize: "none"
                                }}
                            ></textarea>
                            <button style={{
                                padding: "15px",
                                background: "var(--primary-energy)",
                                color: "white",
                                border: "none",
                                borderRadius: "10px",
                                fontSize: "1.1rem",
                                fontWeight: "bold",
                                cursor: "pointer"
                            }}>
                                Send Inquiry
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 style={{ color: "white", fontSize: "1.8rem", marginBottom: "40px" }}>Corporate Info</h3>
                        <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
                            <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                                <div style={{
                                    width: "50px",
                                    height: "50px",
                                    background: "rgba(240, 90, 40, 0.1)",
                                    borderRadius: "12px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "var(--primary-energy)",
                                    fontSize: "1.2rem",
                                    flexShrink: 0
                                }}>
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <h4 style={{ color: "white", fontSize: "1.2rem", marginBottom: "5px" }}>Headquarters</h4>
                                    <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: "1.6" }}>
                                        Bangalore, India<br />
                                        Main Tech Corridor, Sector 7
                                    </p>
                                </div>
                            </div>

                            <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                                <div style={{
                                    width: "50px",
                                    height: "50px",
                                    background: "rgba(0, 242, 234, 0.1)",
                                    borderRadius: "12px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "#00f2ea",
                                    fontSize: "1.2rem",
                                    flexShrink: 0
                                }}>
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <h4 style={{ color: "white", fontSize: "1.2rem", marginBottom: "5px" }}>Email Us</h4>
                                    <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: "1.6" }}>
                                        support@monknetworks.com<br />
                                        info@monknetworks.com
                                    </p>
                                </div>
                            </div>

                            <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                                <div style={{
                                    width: "50px",
                                    height: "50px",
                                    background: "rgba(255, 255, 255, 0.1)",
                                    borderRadius: "12px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "white",
                                    fontSize: "1.2rem",
                                    flexShrink: 0
                                }}>
                                    <FaPhone />
                                </div>
                                <div>
                                    <h4 style={{ color: "white", fontSize: "1.2rem", marginBottom: "5px" }}>Call Us</h4>
                                    <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: "1.6" }}>
                                        +91 (0) 80-2345-6789<br />
                                        Mon - Fri, 9am - 6pm IST
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Interactive Map Section */}
            <div id="office-map">
                <GlobalOffices />
            </div>

        </div>
    );
};

export default ContactPage;
