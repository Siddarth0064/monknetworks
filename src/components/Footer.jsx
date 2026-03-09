import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaArrowRight, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import MonkLogo from "../assets/monk-logo-bg.png";

const Footer = () => {
    const [formData, setFormData] = useState({ email: "", phone: "", message: "" });
    const [hoveredLink, setHoveredLink] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
        alert("Message sent!");
        setFormData({ email: "", phone: "", message: "" });
    };

    const quickLinks = [
        { name: "Home", path: "/monknetworks" },
        { name: "Solutions", path: "/monknetworks/solutions" },
        { name: "Digital Solutions", path: "/monknetworks/digital-solutions" },
        { name: "About Us", path: "/monknetworks/about" },
        { name: "Contact", path: "/monknetworks/contact" },
    ];

    const contactInfo = [
        { icon: <FaEnvelope />, text: "info@monknetworks.in" },
        { icon: <FaPhone />, text: "+91 98765 43210" },
        { icon: <FaMapMarkerAlt />, text: "Bengaluru, Karnataka, India" },
    ];

    const socialLinks = [
        { icon: <FaLinkedin />, color: "#0077b5" },
        { icon: <FaTwitter />, color: "#1da1f2" },
        { icon: <FaFacebook />, color: "#1877f2" },
        { icon: <FaInstagram />, color: "#e1306c" },
    ];

    const inputStyle = {
        padding: "12px 16px",
        borderRadius: "8px",
        border: "1px solid rgba(0, 242, 234, 0.15)",
        background: "rgba(255,255,255,0.04)",
        color: "white",
        fontSize: "0.9rem",
        outline: "none",
        width: "100%",
        boxSizing: "border-box",
        transition: "border-color 0.3s, box-shadow 0.3s",
        fontFamily: "inherit",
    };

    return (
        <footer style={{
            background: "linear-gradient(180deg, #070b14 0%, #040608 100%)",
            borderTop: "1px solid rgba(0, 242, 234, 0.12)",
            color: "white",
            position: "relative",
            overflow: "hidden",
        }}>

            {/* Decorative Top Bar */}
            <div style={{
                height: "3px",
                background: "linear-gradient(90deg, transparent, var(--primary-energy), #F05A28, var(--primary-energy), transparent)",
                opacity: 0.6
            }} />

            {/* Subtle Background Glow */}
            <div style={{
                position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
                width: "700px", height: "300px",
                background: "radial-gradient(ellipse, rgba(0, 242, 234, 0.04) 0%, transparent 70%)",
                pointerEvents: "none"
            }} />

            {/* Main Footer Content */}
            <div className="container" style={{ padding: "70px 5% 50px" }}>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "2fr 1fr 1fr 1.5fr",
                    gap: "60px",
                    alignItems: "start"
                }}>

                    {/* Column 1: Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                            <img src={MonkLogo} alt="Monk Networks" style={{ height: "42px", width: "auto", borderRadius: "8px" }} />
                            <h2 style={{
                                fontSize: "1.4rem", fontWeight: "800", letterSpacing: "1px",
                                margin: 0, fontFamily: "Orbitron, sans-serif",
                                display: "flex", gap: "5px"
                            }}>
                                <span style={{ color: "var(--primary-energy)" }}>Monk</span>
                                <span style={{ color: "white" }}>Networks</span>
                            </h2>
                        </div>

                        <p style={{ color: "rgba(255,255,255,0.5)", lineHeight: "1.8", fontSize: "0.9rem", marginBottom: "28px", maxWidth: "300px" }}>
                            Engineering the future of digital infrastructure. We build robust, scalable network solutions that power enterprise growth.
                        </p>

                        {/* Social Icons */}
                        <div style={{ display: "flex", gap: "12px" }}>
                            {socialLinks.map((s, i) => (
                                <motion.a
                                    key={i}
                                    href="#"
                                    whileHover={{ scale: 1.15, y: -3 }}
                                    style={{
                                        width: "40px", height: "40px", borderRadius: "10px",
                                        background: "rgba(255,255,255,0.05)",
                                        border: "1px solid rgba(255,255,255,0.08)",
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        color: "rgba(255,255,255,0.5)",
                                        fontSize: "1rem", cursor: "pointer",
                                        transition: "all 0.3s",
                                        textDecoration: "none"
                                    }}
                                    onMouseEnter={e => { e.currentTarget.style.background = `rgba(${s.color.replace('#', '').match(/.{2}/g).map(x => parseInt(x, 16)).join(',')}, 0.2)`; e.currentTarget.style.color = s.color; e.currentTarget.style.borderColor = s.color; }}
                                    onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.color = "rgba(255,255,255,0.5)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
                                >
                                    {s.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Column 2: Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h3 style={{
                            fontSize: "0.75rem", fontWeight: "700", letterSpacing: "3px",
                            textTransform: "uppercase", color: "var(--primary-energy)",
                            marginBottom: "24px", margin: "0 0 24px"
                        }}>Navigation</h3>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                            {quickLinks.map((item, i) => (
                                <motion.li key={item.name}
                                    whileHover={{ x: 6 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <Link
                                        to={item.path}
                                        style={{
                                            color: "rgba(255,255,255,0.5)",
                                            textDecoration: "none",
                                            fontSize: "0.9rem",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "8px",
                                            transition: "color 0.3s"
                                        }}
                                        onMouseEnter={e => { e.currentTarget.style.color = "white"; }}
                                        onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.5)"; }}
                                    >
                                        <FaChevronRight style={{ fontSize: "0.65rem", color: "var(--primary-energy)", opacity: 0.6 }} />
                                        {item.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Column 3: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 style={{
                            fontSize: "0.75rem", fontWeight: "700", letterSpacing: "3px",
                            textTransform: "uppercase", color: "var(--primary-energy)",
                            margin: "0 0 24px"
                        }}>Contact</h3>
                        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                            {contactInfo.map((item, i) => (
                                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                                    <div style={{
                                        width: "32px", height: "32px", borderRadius: "8px",
                                        background: "rgba(0, 242, 234, 0.08)",
                                        border: "1px solid rgba(0, 242, 234, 0.15)",
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        color: "var(--primary-energy)", fontSize: "0.8rem",
                                        flexShrink: 0, marginTop: "2px"
                                    }}>
                                        {item.icon}
                                    </div>
                                    <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.88rem", lineHeight: "1.6" }}>
                                        {item.text}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Column 4: Quick Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <h3 style={{
                            fontSize: "0.75rem", fontWeight: "700", letterSpacing: "3px",
                            textTransform: "uppercase", color: "var(--primary-energy)",
                            margin: "0 0 24px"
                        }}>Quick Inquiry</h3>
                        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                            <input
                                type="email" name="email" placeholder="Your Email"
                                value={formData.email} onChange={handleChange} required
                                style={inputStyle}
                                onFocus={e => { e.target.style.borderColor = "rgba(0, 242, 234, 0.5)"; e.target.style.boxShadow = "0 0 0 3px rgba(0, 242, 234, 0.08)"; }}
                                onBlur={e => { e.target.style.borderColor = "rgba(0, 242, 234, 0.15)"; e.target.style.boxShadow = "none"; }}
                            />
                            <input
                                type="tel" name="phone" placeholder="Phone Number"
                                value={formData.phone} onChange={handleChange}
                                style={inputStyle}
                                onFocus={e => { e.target.style.borderColor = "rgba(0, 242, 234, 0.5)"; e.target.style.boxShadow = "0 0 0 3px rgba(0, 242, 234, 0.08)"; }}
                                onBlur={e => { e.target.style.borderColor = "rgba(0, 242, 234, 0.15)"; e.target.style.boxShadow = "none"; }}
                            />
                            <textarea
                                rows="3" name="message" placeholder="Your message..."
                                value={formData.message} onChange={handleChange}
                                style={{ ...inputStyle, resize: "none" }}
                                onFocus={e => { e.target.style.borderColor = "rgba(0, 242, 234, 0.5)"; e.target.style.boxShadow = "0 0 0 3px rgba(0, 242, 234, 0.08)"; }}
                                onBlur={e => { e.target.style.borderColor = "rgba(0, 242, 234, 0.15)"; e.target.style.boxShadow = "none"; }}
                            />
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                style={{
                                    padding: "12px 20px",
                                    borderRadius: "8px",
                                    border: "none",
                                    background: "linear-gradient(135deg, var(--primary-energy), #007bff)",
                                    color: "white",
                                    fontWeight: "700",
                                    fontSize: "0.9rem",
                                    cursor: "pointer",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "8px",
                                    letterSpacing: "0.5px"
                                }}
                            >
                                Send Message <FaArrowRight style={{ fontSize: "0.8rem" }} />
                            </motion.button>
                        </form>
                    </motion.div>

                </div>
            </div>

            {/* Bottom Bar */}
            <div style={{
                borderTop: "1px solid rgba(255,255,255,0.06)",
                padding: "20px 5%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "12px"
            }}>
                <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.82rem" }}>
                    © {new Date().getFullYear()} <span style={{ color: "rgba(255,255,255,0.5)" }}>Monk Networks</span>. All rights reserved.
                </span>
                <div style={{ display: "flex", gap: "24px" }}>
                    {["Privacy Policy", "Terms of Service"].map(item => (
                        <a key={item} href="#" style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.82rem", textDecoration: "none", transition: "color 0.2s" }}
                            onMouseEnter={e => e.target.style.color = "rgba(255,255,255,0.6)"}
                            onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.3)"}
                        >{item}</a>
                    ))}
                </div>
                <span style={{
                    fontSize: "0.78rem", color: "rgba(255,255,255,0.2)",
                    fontFamily: "Orbitron, sans-serif", letterSpacing: "2px"
                }}>
                    MONK NETWORKS
                </span>
            </div>
        </footer>
    );
};

export default Footer;
