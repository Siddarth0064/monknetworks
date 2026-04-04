import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import useMobile from '../../hooks/useMobile';

const HeroContent = ({ stage }) => {
    const isMobile = useMobile();
    const navigate = useNavigate();
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
                right: isMobile ? '0%' : '10%',
                left: isMobile ? '0%' : 'auto',
                top: isMobile ? '55%' : '25%', // Move downward on mobile to split screen with 3D server
                width: isMobile ? '100%' : 'auto',
                minWidth: isMobile ? 'unset' : '600px',
                padding: isMobile ? '0 5%' : '0', // Add padding for mobile text wrap
                zIndex: 40,
                textAlign: isMobile ? 'center' : 'right',
                color: '#fff',
                display: 'flex',
                flexDirection: 'column',
                alignItems: isMobile ? 'center' : 'flex-end',
                gap: isMobile ? '10px' : '0px'
            }}
        >
            {/* 1. Breathing Pulse Line */}
            <motion.div
                variants={fadeUp}
                animate={{
                    width: [60, 100, 60],
                    opacity: [0.6, 1, 0.6],
                    boxShadow: [
                        '0 0 10px var(--primary-energy)',
                        '0 0 25px var(--primary-energy)',
                        '0 0 10px var(--primary-energy)'
                    ]
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{
                    width: '60px',
                    height: '2px',
                    background: 'var(--primary-energy)',
                    marginBottom: isMobile ? '10px' : '20px',
                }}
            />

            {/* 2. Headline: Compressed & Staggered Reveal */}
            <div style={{ overflow: 'visible' }}>
                <motion.h1
                    variants={{
                        hidden: { y: 100, opacity: 0 },
                        visible: {
                            y: 0,
                            opacity: 1,
                            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
                        }
                    }}
                    style={{
                        fontSize: isMobile ? '1.8rem' : '3.2rem',
                        fontFamily: 'Orbitron, sans-serif',
                        lineHeight: '1.2',
                        margin: 0,
                        fontWeight: '900',
                        letterSpacing: isMobile ? '0px' : '-1.5px',
                        color: 'white',
                        textTransform: 'uppercase'
                    }}
                >
                    Next-Gen
                </motion.h1>
            </div>

            <div style={{ overflow: 'visible', marginTop: '-5px' }}>
                <motion.h1
                    variants={{
                        hidden: { x: -50, opacity: 0 },
                        visible: {
                            x: 0,
                            opacity: 1,
                            transition: { delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }
                        }
                    }}
                    style={{
                        color: 'var(--primary-energy)',
                        fontSize: isMobile ? '1.7rem' : '3.5rem',
                        fontFamily: 'Orbitron, sans-serif',
                        fontWeight: '900',
                        textTransform: 'uppercase',
                        WebkitTextStroke: isMobile ? '0.5px var(--primary-energy)' : '1px var(--primary-energy)',
                        WebkitTextFillColor: 'transparent',
                        opacity: 0.9,
                        letterSpacing: isMobile ? '0.5px' : '1px'
                    }}
                >
                    Infrastructure
                </motion.h1>
            </div>

            {/* 3. Subheading: Compact Clean */}
            <motion.p
                variants={fadeUp}
                style={{
                    fontSize: isMobile ? '0.9rem' : '1rem',
                    color: 'rgba(255, 255, 255, 0.6)',
                    lineHeight: '1.6',
                    fontFamily: 'Inter, sans-serif',
                    marginTop: '20px',
                    fontWeight: '300',
                    maxWidth: '450px',
                    textAlign: isMobile ? 'center' : 'right',
                    letterSpacing: '0.3px'
                }}
            >
                Precision-engineered foundations for the world's most resilient enterprises.
            </motion.p>

            {/* 4. Magnetic CTA: Scaled Down */}
            <div style={{ marginTop: '35px' }}>
                <motion.button
                    onClick={() => navigate('/monknetworks/contact')}
                    variants={fadeUp}
                    whileHover={{
                        scale: 1.05,
                        backgroundColor: '#fff',
                        color: '#000',
                        boxShadow: '0 15px 30px rgba(255, 255, 255, 0.15)'
                    }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                        padding: '16px 40px',
                        fontSize: '0.9rem',
                        fontWeight: '800',
                        fontFamily: 'Orbitron, sans-serif',
                        color: '#fff',
                        background: 'var(--primary-energy)',
                        border: 'none',
                        borderRadius: '50px',
                        cursor: 'pointer',
                        letterSpacing: '1.5px',
                        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                >
                    GET STARTED
                </motion.button>
            </div>
        </motion.div>
    );
};

export default HeroContent;
