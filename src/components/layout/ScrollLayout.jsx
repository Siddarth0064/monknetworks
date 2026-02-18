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

    // Background transition: Deep Navy -> Slightly lighter Navy -> Dark -> Navy/Orange Hint -> Deep Navy
    // Mapping to sections: Hero (0) -> Solutions (0.25) -> Services (0.5) -> About (0.75) -> Careers (1)
    const backgroundColor = useTransform(
        smoothProgress,
        [0, 0.25, 0.5, 0.75, 1],
        [
            "#0a0a0a", // Hero (Deep Dark)
            "#0B1220", // Solutions (Deep Navy)
            "#0f172a", // Services (Slightly Lighter)
            "#111827", // About (Warm twist possibly via overlay, kept dark here)
            "#0a0a0a"  // Careers (Back to Deep Dark)
        ]
    );

    return (
        <motion.div
            ref={containerRef}
            style={{
                backgroundColor,
                position: "relative",
                transition: "background-color 1s ease" // Fallback if motion value glitches
            }}
        >
            {/* Global Connecting Line Overlay */}
            <ConnectingLines scrollYProgress={smoothProgress} />

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
