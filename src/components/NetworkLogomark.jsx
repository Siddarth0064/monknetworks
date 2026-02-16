import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NetworkLogomark = () => {
    const [showNetwork, setShowNetwork] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowNetwork((prev) => !prev);
        }, 4000); // Toggle every 4 seconds
        return () => clearInterval(interval);
    }, []);

    // Define node positions for a small network graph
    const nodes = [
        { x: 20, y: 10 },
        { x: 10, y: 30 },
        { x: 30, y: 30 },
        { x: 10, y: 10 },
        { x: 30, y: 10 }, // Extra nodes for complexity
        { x: 20, y: 35 }
    ];

    // Define connections between nodes (indices)
    const links = [
        [0, 1], [0, 2], [1, 2], [3, 0], [4, 0], [1, 5], [2, 5]
    ];

    return (
        <div
            style={{
                width: "40px",
                height: "40px",
                background: "linear-gradient(135deg, #00f2ea22, #007bff44)", // Subtle background
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                boxShadow: "0 0 10px rgba(0, 242, 234, 0.3)",
                border: "1px solid rgba(0, 242, 234, 0.3)",
                overflow: "hidden"
            }}
        >
            <AnimatePresence mode="wait">
                {!showNetwork ? (
                    <motion.svg
                        key="m-logo"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        style={{ overflow: "visible", position: "absolute" }}
                        initial={{ opacity: 0, scale: 0.5 }} // Start smaller
                        animate={{ opacity: 1, scale: 0.8 }} // Scale to 0.8 instead of 1 (smaller)
                        exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }} // Fast exit
                        transition={{ duration: 0.5 }}
                    >
                        <motion.path
                            d="M 12 30 L 12 10 L 20 20 L 28 10 L 28 30"
                            fill="transparent"
                            stroke="#00f2ea" // Attractive Cyan
                            strokeWidth="3" // Slightly thicker for visibility when small
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            exit={{ pathLength: 0 }}
                            transition={{
                                duration: 1, // Faster drawing
                                ease: "easeInOut"
                            }}
                        />
                    </motion.svg>
                ) : (
                    <motion.svg
                        key="network"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        style={{ overflow: "visible", position: "absolute" }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Draw Links */}
                        {links.map(([start, end], i) => (
                            <motion.line
                                key={`link-${i}`}
                                x1={nodes[start].x}
                                y1={nodes[start].y}
                                x2={nodes[end].x}
                                y2={nodes[end].y}
                                stroke="#00f2ea"
                                strokeWidth="1.5"
                                strokeOpacity="0.6"
                                strokeLinecap="round"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{
                                    pathLength: [0, 1, 1, 0],
                                    opacity: [0, 1, 1, 0]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: i * 0.2 // Stagger animation
                                }}
                            />
                        ))}

                        {/* Draw Nodes */}
                        {nodes.map((node, i) => (
                            <motion.circle
                                key={`node-${i}`}
                                cx={node.x}
                                cy={node.y}
                                r="2.5"
                                fill="#ffffff"
                                initial={{ scale: 0 }}
                                animate={{ scale: [0, 1.2, 1] }}
                                transition={{
                                    duration: 0.5,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    repeatDelay: 2,
                                    delay: i * 0.1
                                }}
                            />
                        ))}

                        {/* Central Pulse */}
                        <motion.circle
                            cx="20"
                            cy="20"
                            r="18"
                            fill="none"
                            stroke="#00f2ea"
                            strokeWidth="1"
                            initial={{ scale: 0.5, opacity: 1 }}
                            animate={{ scale: 1.2, opacity: 0 }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </motion.svg>
                )}
            </AnimatePresence>
        </div>
    );
};

export default NetworkLogomark;
