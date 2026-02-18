import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NetworkLogomark = () => {
    // Define circuit nodes
    const nodes = [
        { x: 20, y: 10 },
        { x: 10, y: 28 },
        { x: 30, y: 28 },
        { x: 10, y: 10 },
        { x: 30, y: 10 },
        { x: 20, y: 35 }
    ];

    // Define circuit connections
    const links = [
        [0, 1], [0, 2], [1, 2], [3, 0], [4, 0], [1, 5], [2, 5]
    ];

    return (
        <motion.div
            style={{
                width: "45px",
                height: "45px",
                background: "linear-gradient(135deg, rgba(240, 90, 40, 0.1), rgba(30, 58, 95, 0.1))",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                border: "1px solid rgba(240, 90, 40, 0.2)",
                overflow: "hidden"
            }}
            animate={{
                y: [0, -3, 0], // Calm float
                boxShadow: [
                    "0 0 5px rgba(240, 90, 40, 0.2)",
                    "0 0 15px rgba(240, 90, 40, 0.4)",
                    "0 0 5px rgba(240, 90, 40, 0.2)"
                ]
            }}
            transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        >
            <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                style={{ overflow: "visible", position: "absolute" }}
            >
                {/* Circuit Links */}
                {links.map(([start, end], i) => (
                    <motion.line
                        key={`link-${i}`}
                        x1={nodes[start].x}
                        y1={nodes[start].y}
                        x2={nodes[end].x}
                        y2={nodes[end].y}
                        stroke="#1E3A5F"
                        strokeWidth="1"
                        strokeOpacity="0.3"
                        strokeLinecap="round"
                    />
                ))}

                {/* Pulsing Energy Flow */}
                {links.map(([start, end], i) => (
                    <motion.line
                        key={`pulse-${i}`}
                        x1={nodes[start].x}
                        y1={nodes[start].y}
                        x2={nodes[end].x}
                        y2={nodes[end].y}
                        stroke="#F05A28" // Warm Orange
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                            pathLength: [0, 1, 1, 0],
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.4,
                            repeatDelay: 2
                        }}
                    />
                ))}

                {/* Central "M" Monogram - Revised to be cleaner */}
                <motion.path
                    d="M 12 30 L 12 12 L 20 22 L 28 12 L 28 30"
                    fill="transparent"
                    stroke="#F05A28" // Warm Orange
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{
                        duration: 1.5,
                        ease: "easeOut"
                    }}
                />
            </svg>
        </motion.div>
    );
};

export default NetworkLogomark;
