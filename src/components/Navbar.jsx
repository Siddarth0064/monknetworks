import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import NetworkLogomark from "./NetworkLogomark";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                zIndex: 1000,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1.2rem 4rem",
                backgroundColor: scrolled ? "rgba(10, 10, 10, 0.9)" : "transparent",
                backdropFilter: scrolled ? "blur(10px)" : "none",
                boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.5)" : "none",
                transition: "all 0.3s ease",
            }}
        >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                {/* Placeholder Logo Icon */}
                <NetworkLogomark />
                <h1
                    style={{
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        background: "linear-gradient(to right, #ffffff, #00f2ea)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    MonkNetworks
                </h1>
            </div>

            <ul style={{ display: "flex", gap: "30px", alignItems: "center" }}>
                {["Home", "Solutions", "Services", "About Us", "Careers"].map(
                    (item) => (
                        <li key={item}>
                            <a
                                href={`#${item.toLowerCase().replace(" ", "")}`}
                                style={{
                                    color: "var(--text-main)",
                                    fontWeight: "500",
                                    fontSize: "1rem",
                                    transition: "color 0.3s",
                                }}
                                onMouseEnter={(e) => (e.target.style.color = "#00f2ea")}
                                onMouseLeave={(e) => (e.target.style.color = "var(--text-main)")}
                            >
                                {item}
                            </a>
                        </li>
                    )
                )}
            </ul>

            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                <FaSearch
                    style={{ color: "white", cursor: "pointer", fontSize: "1.2rem" }}
                />
                <button
                    style={{
                        padding: "10px 25px",
                        background: "linear-gradient(90deg, #00f2ea, #007bff)",
                        border: "none",
                        borderRadius: "30px",
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "1rem",
                        cursor: "pointer",
                        boxShadow: "0 0 15px rgba(0, 242, 234, 0.4)",
                    }}
                >
                    Contact Us
                </button>
            </div>
        </motion.nav>
    );
};

export default Navbar;
