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

    // Navigation items
    const navItems = ["Home", "Solutions", "Services", "About Us", "Careers"];

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
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
                backgroundColor: scrolled ? "rgba(10, 10, 10, 0.95)" : "transparent",
                backdropFilter: scrolled ? "blur(12px)" : "none",
                boxShadow: scrolled ? "0 4px 20px rgba(0, 0, 0, 0.5)" : "none",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                color: "white",
            }}
        >
            {/* Logo Section */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px", cursor: "pointer" }}>
                <motion.img
                    src={MonkLogo}
                    alt="Monk Networks Logo"
                    style={{
                        height: "50px",
                        width: "auto",
                        borderRadius: "10px", // Rounded corners for a softer look
                        boxShadow: "0 4px 10px rgba(0,0,0,0.1)" // Subtle shadow
                    }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                />
                <h1
                    style={{
                        fontSize: "1.6rem",
                        fontWeight: "700",
                        letterSpacing: "-0.5px",
                        margin: 0,
                        fontFamily: "'Inter', sans-serif"
                    }}
                >
                    <span style={{ color: "var(--primary-energy)" }}>Monk</span>
                    <span style={{ color: "white", transition: "color 0.3s" }}>Networks</span>
                </h1>
            </div>

            {/* Navigation Links */}
            <ul style={{ display: "flex", gap: "40px", alignItems: "center", margin: 0, padding: 0 }}>
                {navItems.map((item) => (
                    <li key={item} style={{ position: "relative" }}>
                        <a
                            href={`#${item.toLowerCase().replace(" ", "")}`}
                            className="nav-link"
                            style={{
                                color: "rgba(255,255,255,0.9)",
                                fontWeight: "500",
                                fontSize: "1rem",
                                textDecoration: "none",
                                position: "relative",
                                padding: "5px 0",
                                transition: "all 0.3s ease",
                                display: "block"
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "translateY(-2px)";
                                e.currentTarget.style.color = "var(--primary-energy)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.color = "rgba(255,255,255,0.9)";
                            }}
                        >
                            {item}
                            {/* Animated Underline */}
                            <span
                                className="hover-line"
                                style={{
                                    position: "absolute",
                                    bottom: 0,
                                    left: "50%",
                                    width: "0%",
                                    height: "2px",
                                    background: "linear-gradient(90deg, var(--primary-energy), var(--professional-navy))",
                                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                                    transform: "translateX(-50%)",
                                    opacity: 0
                                }}
                            />
                            <style>
                                {`
                                    .nav-link:hover .hover-line {
                                        width: 100%;
                                        opacity: 1;
                                    }
                                `}
                            </style>
                        </a>
                    </li>
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
