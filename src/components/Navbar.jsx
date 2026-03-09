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

    // Navigation items for the multi-page structure
    const navItems = [
        { name: "Home", path: "/monknetworks" },
        { name: "Solutions", path: "/monknetworks/solutions" },
        { name: "Digital Solutions", path: "/monknetworks/digital-solutions" },
        { name: "About Us", path: "/monknetworks/about" },
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
                padding: scrolled ? "0.4rem 5%" : "0.8rem 5%",
                backgroundColor: "transparent",
                backdropFilter: scrolled ? "none" : "none", // Explicitly none for full-screen feel
                boxShadow: "none",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                color: "white",
            }}
        >
            {/* Logo Section */}
            <Link to="/monknetworks" style={{ textDecoration: 'none' }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}>
                    <motion.img
                        src={MonkLogo}
                        alt="Monk Networks Logo"
                        style={{
                            height: scrolled ? "30px" : "38px",
                            width: "auto",
                            borderRadius: "6px",
                            transition: "all 0.4s ease"
                        }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    />
                    <motion.h1
                        style={{
                            fontSize: scrolled ? "1.1rem" : "1.35rem",
                            fontWeight: "700",
                            letterSpacing: "1px",
                            margin: 0,
                            fontFamily: "Orbitron, sans-serif",
                            display: "flex",
                            gap: "5px",
                            transition: "all 0.4s ease"
                        }}
                    >
                        <span style={{ color: "var(--primary-energy)" }}>Monk</span>
                        <span style={{ color: "white" }}>Networks</span>
                    </motion.h1>
                </div>
            </Link>

            {/* Navigation Links - Fades out on scroll */}
            <motion.ul
                animate={{
                    opacity: scrolled ? 0 : 1,
                    scale: scrolled ? 0.95 : 1,
                    pointerEvents: scrolled ? "none" : "auto"
                }}
                transition={{ duration: 0.3 }}
                style={{
                    display: "flex",
                    gap: "25px",
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                    alignItems: "center"
                }}
            >
                {navItems.map((item) => (
                    <motion.li key={item.name} style={{ position: "relative" }} whileHover="hover">
                        <Link
                            to={item.path}
                            style={{
                                color: "rgba(255,255,255,0.9)",
                                fontWeight: "500",
                                fontSize: "0.9rem",
                                textDecoration: "none",
                                position: "relative",
                                paddingBottom: "3px",
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
                        </Link>

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
            </motion.ul>

            {/* Right Side Actions - Fades out on scroll */}
            <motion.div
                animate={{
                    opacity: scrolled ? 0 : 1,
                    scale: scrolled ? 0.95 : 1,
                    pointerEvents: scrolled ? "none" : "auto"
                }}
                transition={{ duration: 0.3 }}
                style={{ display: "flex", alignItems: "center", gap: "20px" }}
            >
                <Link to="/monknetworks/contact">
                    <button
                        style={{
                            padding: "8px 22px",
                            background: "linear-gradient(135deg, var(--primary-energy), #FF8C00)",
                            border: "none",
                            borderRadius: "50px",
                            color: "white",
                            fontWeight: "600",
                            fontSize: "0.9rem",
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
                </Link>
            </motion.div>
        </motion.nav>
    );
};


export default Navbar;
