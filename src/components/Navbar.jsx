import React, { useState, useEffect } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import useMobile from "../hooks/useMobile";
import NetworkLogomark from "./NetworkLogomark"; // Keeping for reference or fallback
import MonkLogo from "../assets/monk-logo-bg.png";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isMobile = useMobile();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close menu when resizing to desktop
    useEffect(() => {
        if (!isMobile) setIsMenuOpen(false);
    }, [isMobile]);

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
                padding: isMobile ? (scrolled ? "0.3rem 5%" : "0.5rem 5%") : (scrolled ? "0.4rem 5%" : "0.8rem 5%"),
                backgroundColor: isMobile ? (scrolled ? "transparent" : "transparent") : (scrolled ? "rgba(10, 10, 10, 0.85)" : "transparent"),
                backdropFilter: isMobile ? "none" : (scrolled ? "blur(15px)" : "none"),
                borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.05)" : "none",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                color: "white",
            }}
        >
            {/* Logo Section */}
            <Link
                to="/monknetworks"
                style={{
                    textDecoration: 'none',
                    display: "block",
                    opacity: 1,
                    transition: "all 0.3s ease"
                }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: isMobile ? "8px" : "10px", cursor: "pointer" }}>
                    <motion.img
                        src={MonkLogo}
                        alt="Monk Networks Logo"
                        style={{
                            height: isMobile ? (scrolled ? "24px" : "26px") : (scrolled ? "30px" : "38px"),
                            width: "auto",
                            borderRadius: "6px",
                            transition: "all 0.4s ease"
                        }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    />
                    <motion.h1
                        style={{
                            fontSize: isMobile ? "0.9rem" : (scrolled ? "1.1rem" : "1.35rem"),
                            fontWeight: "700",
                            letterSpacing: "1px",
                            margin: 0,
                            fontFamily: "Orbitron, sans-serif",
                            display: (isMobile && scrolled) ? "none" : "flex",
                            gap: "5px",
                            transition: "all 0.4s ease"
                        }}
                    >
                        <span style={{ color: "var(--primary-energy)" }}>Monk</span>
                        <span style={{ color: "white" }}>Networks</span>
                    </motion.h1>
                </div>
            </Link>

            {/* Desktop Navigation */}
            {!isMobile && (
                <>
                    <motion.ul
                        animate={{
                            opacity: scrolled ? 0.8 : 1,
                            scale: 1,
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

                    <motion.div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
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
                            >
                                Contact Us
                            </button>
                        </Link>
                    </motion.div>
                </>
            )}

            {/* Mobile Menu Toggle */}
            {isMobile && (
                <div
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    style={{
                        fontSize: scrolled ? "1.2rem" : "1.5rem",
                        cursor: "pointer",
                        color: "white",
                        zIndex: 1100,
                        padding: "5px",
                        transition: "all 0.4s ease"
                    }}
                >
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </div>
            )}

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        style={{
                            position: "fixed",
                            top: 0,
                            right: 0,
                            width: "80%",
                            height: "100vh",
                            backgroundColor: "rgba(10, 10, 10, 0.98)",
                            backdropFilter: "blur(20px)",
                            zIndex: 1050,
                            display: "flex",
                            flexDirection: "column",
                            padding: "100px 10% 40px",
                            boxShadow: "-10px 0 30px rgba(0,0,0,0.5)"
                        }}
                    >
                        <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        to={item.path}
                                        onClick={() => setIsMenuOpen(false)}
                                        style={{
                                            fontSize: "1.5rem",
                                            fontWeight: "600",
                                            color: "white",
                                            textDecoration: "none",
                                            fontFamily: "Orbitron, sans-serif"
                                        }}
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                style={{ marginTop: "20px" }}
                            >
                                <Link to="/monknetworks/contact" onClick={() => setIsMenuOpen(false)}>
                                    <button
                                        style={{
                                            width: "100%",
                                            padding: "15px",
                                            background: "var(--primary-energy)",
                                            border: "none",
                                            borderRadius: "10px",
                                            color: "white",
                                            fontWeight: "700",
                                            fontSize: "1.1rem"
                                        }}
                                    >
                                        Contact Us
                                    </button>
                                </Link>
                            </motion.div>
                        </div>

                        <div style={{ marginTop: "auto", opacity: 0.5, fontSize: "0.8rem", textAlign: "center" }}>
                            © 2026 Monk Networks
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};


export default Navbar;
