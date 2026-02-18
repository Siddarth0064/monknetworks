import React, { useRef, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const ScrollLayout = ({ children }) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Background transition: Deep Navy -> slightly lighter -> Deep Navy -> Orange Tint -> Deep Navy
    // Adjusted for more sections
    const backgroundColor = useTransform(
        smoothProgress,
        [0, 0.2, 0.4, 0.6, 0.8, 1],
        [
            "#0a0a0a", // Hero
            "#0B1220", // Services
            "#0f172a", // Expertise
            "#111827", // Tech Stack
            "#1a1005", // IT Support (Subtle Orange Hint)
            "#0a0a0a"  // Footer
        ]
    );

    return (
        <motion.div
            ref={containerRef}
            style={{
                backgroundColor,
                position: "relative",
                transition: "background-color 1s ease"
            }}
        >
            {/* Global Connecting Line Overlay */}
            <ConnectingLines scrollYProgress={smoothProgress} />

            {/* Grid Intelligence Overlay */}
            <div style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100vh",
                backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
                pointerEvents: "none",
                zIndex: 1
            }} />

            {/* Particle Background Layer */}
            <Particles />

            {/* Content Content */}
            <div style={{ position: "relative", zIndex: 10 }}>
                {children}
            </div>
        </motion.div>
    );
};

const ConnectingLines = ({ scrollYProgress }) => {
    // We want a line that draws down the center or side as we scroll
    const pathLength = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });

    return (
        <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            pointerEvents: "none",
            zIndex: 5
        }}>
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                {/* Central Line Example - This scales with viewport, might need absolute positioning logic for refined alignment */}
                {/* Concept: A glowing line that traces the user's journey */}
                <motion.path
                    d="M 50 0 L 50 100"
                    stroke="url(#gradient-line)"
                    strokeWidth="0.2"
                    fill="none"
                    style={{ pathLength }}
                />

                <defs>
                    <linearGradient id="gradient-line" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#F05A28" stopOpacity="0" />
                        <stop offset="10%" stopColor="#F05A28" stopOpacity="0.8" />
                        <stop offset="90%" stopColor="#1E3A5F" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#1E3A5F" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
};

const Particles = () => {
    // Simple floating particles for depth
    return (
        <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            pointerEvents: "none",
            zIndex: 1,
            overflow: "hidden"
        }}>
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    style={{
                        position: "absolute",
                        width: Math.random() * 4 + 1 + "px",
                        height: Math.random() * 4 + 1 + "px",
                        borderRadius: "50%",
                        background: i % 2 === 0 ? "var(--primary-energy)" : "var(--professional-navy)",
                        opacity: 0.3,
                        left: Math.random() * 100 + "%",
                        top: Math.random() * 100 + "%"
                    }}
                    animate={{
                        y: [0, -100],
                        opacity: [0.3, 0]
                    }}
                    transition={{
                        duration: Math.random() * 10 + 10,
                        repeat: Infinity,
                        ease: "linear",
                        delay: Math.random() * 5
                    }}
                />
            ))}
        </div>
    );
};

export default ScrollLayout;
