import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import NetworkLogomark from "./NetworkLogomark";

const Footer = () => {
    const [formData, setFormData] = useState({ email: "", phone: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data for Excel:", formData);
        alert("Message sent! (Simulated storage to Excel)");
        setFormData({ email: "", phone: "", message: "" });
    };

    return (
        <footer id="contact" style={{ backgroundColor: "#050505", borderTop: "1px solid #222", color: "white", paddingTop: "80px" }}>
            <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "50px", paddingBottom: "50px" }}>

                {/* Company Info */}
                <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                        <NetworkLogomark />
                        {/* <div style={{ width: "30px", height: "30px", background: "linear-gradient(135deg, #00f2ea, #007bff)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold" }}>M</div> */}
                        <h2 style={{ fontSize: "1.5rem" }}>MonkNetworks</h2>
                    </div>
                    <p style={{ color: "#a0a0a0", marginBottom: "20px", lineHeight: "1.6" }}>
                        Leading the way in server infrastructure and network solutions. Connecting the world, securely.
                    </p>
                    <div style={{ display: "flex", gap: "15px" }}>
                        {[<FaLinkedin />, <FaTwitter />, <FaFacebook />].map((icon, i) => (
                            <div key={i} style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#1a1a1a", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#00f2ea" }}>
                                {icon}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 style={{ fontSize: "1.2rem", marginBottom: "20px", color: "white" }}>Quick Links</h3>
                    <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        {["Home", "Solutions", "Services", "About Us", "Careers"].map(item => (
                            <li key={item}>
                                <a href={`#${item.toLowerCase().replace(" ", "")}`} style={{ color: "#a0a0a0", transition: "color 0.2s" }} onMouseOver={e => e.target.style.color = "white"} onMouseOut={e => e.target.style.color = "#a0a0a0"}>
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Form */}
                <div>
                    <h3 style={{ fontSize: "1.2rem", marginBottom: "20px", color: "white" }}>Contact Us</h3>
                    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            style={{ padding: "12px", borderRadius: "5px", border: "1px solid #333", background: "#121212", color: "white" }}
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            style={{ padding: "12px", borderRadius: "5px", border: "1px solid #333", background: "#121212", color: "white" }}
                        />
                        <textarea
                            rows="3"
                            name="message"
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleChange}
                            style={{ padding: "12px", borderRadius: "5px", border: "1px solid #333", background: "#121212", color: "white", resize: "none" }}
                        ></textarea>
                        <button
                            type="submit"
                            style={{
                                padding: "12px",
                                borderRadius: "5px",
                                border: "none",
                                background: "linear-gradient(90deg, #00f2ea, #007bff)",
                                color: "white",
                                fontWeight: "bold",
                                cursor: "pointer"
                            }}
                        >
                            Send Message
                        </button>
                    </form>
                </div>

            </div>
            <div style={{ borderTop: "1px solid #222", padding: "20px 0", textAlign: "center", color: "#555" }}>
                &copy; {new Date().getFullYear()} MonkNetworks. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
