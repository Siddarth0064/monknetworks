import React from 'react';
import { motion } from 'framer-motion';

const HeroContent = ({ stage }) => {
    // Reveal text only after the shift starts (Stage 6)
    if (stage < 6) return null;

    const headlineText = "Powering Your Digital Future.";
    const letters = headlineText.split("");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: 0.5 }
        })
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            textShadow: "0 0 10px rgba(0, 242, 234, 0.8)",
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            textShadow: "0 0 0px rgba(0, 242, 234, 0)",
        },
    };

    return (
        <div style={{
            position: 'absolute',
            right: '5%',
            top: '30%',
            width: '40%',
            zIndex: 40,
            textAlign: 'left',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
        }}>

            {/* Headline with Letter-by-Letter Reveal */}
            <motion.h1
                variants={container}
                initial="hidden"
                animate="visible"
                style={{
                    fontSize: '3.5rem',
                    fontFamily: 'Orbitron, sans-serif',
                    lineHeight: '1.2',
                    margin: 0,
                    background: 'linear-gradient(to right, #fff, #00f2ea)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                }}
            >
                {letters.map((letter, index) => (
                    <motion.span variants={child} key={index}>
                        {letter}
                    </motion.span>
                ))}
            </motion.h1>

            {/* Vision Statement Slide Up */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 1 }}
                style={{
                    fontSize: '1.2rem',
                    color: '#a0b0c0',
                    lineHeight: '1.6',
                    maxWidth: '90%'
                }}
            >
                We build high-performance servers, cloud systems, and custom web applications engineered for reliability, security, and limitless growth.
            </motion.p>

            {/* CTA Button with Glow/Pulse */}
            <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 242, 234, 0.6)' }}
                transition={{ delay: 2.5, duration: 0.5 }}
                style={{
                    padding: '15px 40px',
                    fontSize: '1rem',
                    fontFamily: 'Orbitron, sans-serif',
                    color: '#fff',
                    background: 'linear-gradient(90deg, #00f2ea, #0077ff)',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    width: 'fit-content',
                    boxShadow: '0 0 10px rgba(0, 242, 234, 0.3)',
                    marginTop: '20px'
                }}
            >
                GET STARTED
            </motion.button>

            {/* Subtle floating particles around text */}
            <div style={{ position: 'absolute', width: '100%', height: '100%', pointerEvents: 'none', zIndex: -1 }}>
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{ y: [0, -20, 0], opacity: [0, 0.5, 0] }}
                        transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}
                        style={{
                            position: 'absolute',
                            left: `${Math.random() * 80}%`,
                            top: `${Math.random() * 100}%`,
                            width: '2px', height: '2px', background: '#00f2ea', borderRadius: '50%'
                        }}
                    />
                ))}
            </div>

        </div>
    );
};

export default HeroContent;
