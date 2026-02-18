import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import NetworkLogomark from "./NetworkLogomark"; // Keeping for reference or fallback
import MonkLogo from "../assets/monk-logo-bg.png";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Navigation items mapped to section IDs
    const navItems = [
        { name: "Home", id: "home" },
        { name: "Services", id: "services" },
        { name: "Expertise", id: "expertise" },
        { name: "Tech Stack", id: "tech-stack" },
        { name: "Support", id: "support" },
        { name: "Contact", id: "contact" }
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                zIndex: 1000,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1rem 5%",
                backgroundColor: scrolled ? "rgba(11, 18, 32, 0.95)" : "transparent", // Deep Navy
                backdropFilter: scrolled ? "blur(12px)" : "none",
                boxShadow: scrolled ? "0 4px 20px rgba(0, 0, 0, 0.5)" : "none",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                color: "white",
            }}
        >
            {/* Logo Section */}
            <div style={{ display: "flex", alignItems: "center", gap: "15px", cursor: "pointer" }} onClick={() => window.scrollTo(0, 0)}>
                <motion.img
                    src={MonkLogo}
                    alt="Monk Networks Logo"
                    style={{
                        height: "45px",
                        width: "auto",
                        borderRadius: "8px",
                    }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                />
                <h1
                    style={{
                        fontSize: "1.5rem",
                        fontWeight: "700",
                        letterSpacing: "1px",
                        margin: 0,
                        fontFamily: "Orbitron, sans-serif",
                        display: "flex",
                        gap: "5px",
                    }}
                >
                    <span style={{ color: "var(--primary-energy)" }}>Monk</span>
                    <span style={{ color: "white", transition: "color 0.3s" }}>Networks</span>
                </h1>
            </div>

            {/* Navigation Links */}
            <ul style={{ display: "flex", gap: "30px", listStyle: "none", margin: 0, padding: 0, alignItems: "center" }}>
                {navItems.map((item) => (
                    <motion.li key={item.name} style={{ position: "relative" }} whileHover="hover">
                        <a
                            href={`#${item.id}`}
                            style={{
                                color: "rgba(255,255,255,0.9)",
                                fontWeight: "500",
                                fontSize: "0.95rem",
                                textDecoration: "none",
                                position: "relative",
                                paddingBottom: "5px",
                                transition: "color 0.3s",
                                display: "block"
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = "var(--primary-energy)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = "rgba(255,255,255,0.9)";
                            }}
                        >
                            {item.name}
                        </a>

                        {/* Underline Animation */}
                        <motion.div
                            variants={{
                                hover: { scaleX: 1, originX: 0 }
                            }}
                            initial={{ scaleX: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            style={{
                                position: "absolute",
                                bottom: 0,
                                left: 0,
                                right: 0,
                                height: "2px",
                                background: "var(--primary-energy)",
                                transformOrigin: "left"
                            }}
                        />
                    </motion.li>
                ))}
            </ul>

            {/* Right Side Actions */}
            <div style={{ display: "flex", alignItems: "center", gap: "25px" }}>
                {/* <FaSearch
                    style={{
                        color: scrolled ? "var(--professional-navy)" : "white",
                        cursor: "pointer",
                        fontSize: "1.1rem",
                        transition: "color 0.3s",
                        opacity: 0.8
                    }}
                    onMouseEnter={(e) => e.target.style.opacity = 1}
                    onMouseLeave={(e) => e.target.style.opacity = 0.8}
                /> */}
                <button
                    style={{
                        padding: "10px 28px",
                        background: "linear-gradient(135deg, var(--primary-energy), #FF8C00)",
                        border: "none",
                        borderRadius: "50px",
                        color: "white",
                        fontWeight: "600",
                        fontSize: "0.95rem",
                        cursor: "pointer",
                        boxShadow: "0 4px 15px rgba(240, 90, 40, 0.3)",
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        letterSpacing: "0.5px"
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.transform = "translateY(-2px)";
                        e.target.style.boxShadow = "0 6px 20px rgba(240, 90, 40, 0.5)";
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = "translateY(0)";
                        e.target.style.boxShadow = "0 4px 15px rgba(240, 90, 40, 0.3)";
                    }}
                >
                    Contact Us
                </button>
            </div>
        </motion.nav>
    );
};

export default Navbar;
