import React from 'react';
import { motion } from 'framer-motion';

const HeroContent = ({ stage }) => {
    // Reveal text only after the shift starts (Stage 6)
    if (stage < 6) return null;

    // Enterprise "Fade Up" Variant
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
        }
    };

    const container = {
        visible: {
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.2
            }
        }
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={container}
            style={{
                position: 'absolute',
                right: '5%',
                top: '30%',
                width: '45%',
                zIndex: 40,
                textAlign: 'left',
                color: '#fff',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px'
            }}
        >

            {/* Headline */}
            <motion.h1
                variants={fadeUp}
                style={{
                    fontSize: '3.5rem',
                    fontFamily: 'Orbitron, sans-serif',
                    lineHeight: '1.2',
                    margin: 0,
                    color: 'white',
                    fontWeight: '700'
                }}
            >
                Empowering <span style={{ color: 'var(--primary-energy)', textShadow: "0 0 20px rgba(240, 90, 40, 0.4)" }}>Grid Management</span> Solutions
            </motion.h1>

            {/* Subheading */}
            <motion.p
                variants={fadeUp}
                style={{
                    fontSize: '1.2rem',
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: '1.6',
                    maxWidth: '90%'
                }}
            >
                Building high-performance resilient digital infrastructures engineered for reliability, security, and limitless growth.
            </motion.p>

            {/* CTA Button with Pulse */}
            <motion.button
                variants={fadeUp}
                animate={{
                    boxShadow: [
                        "0 0 0px rgba(240, 90, 40, 0)",
                        "0 0 20px rgba(240, 90, 40, 0.6)",
                        "0 0 0px rgba(240, 90, 40, 0)"
                    ]
                }}
                transition={{
                    boxShadow: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }
                }}
                whileHover={{ scale: 1.05, backgroundColor: "#ff6b3d" }}
                whileTap={{ scale: 0.95 }}
                style={{
                    padding: '16px 42px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    fontFamily: 'Orbitron, sans-serif',
                    color: '#fff',
                    backgroundColor: 'var(--primary-energy)',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    width: 'fit-content',
                    marginTop: '20px',
                    letterSpacing: '1px'
                }}
            >
                GET STARTED
            </motion.button>

        </motion.div>
    );
};

export default HeroContent;
