import React from 'react';
import { motion } from 'framer-motion';
import ServerInfrastructure from './ServerInfrastructure';
import CloudStorage from './CloudStorage';
import ConfigurationControl from './ConfigurationControl';
import VantaGlobe from '../VantaGlobe';

const NewHero = () => {
    return (
        <section
            style={{
                position: "relative",
                minHeight: "100vh",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                background: "#050505", // Very dark background
                overflow: "hidden",
                paddingTop: "100px",
                paddingBottom: "50px",
                boxSizing: "border-box",
                zIndex: 1
            }}
        >
            {/* Background Effects */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, opacity: 0.3 }}>
                <VantaGlobe />
            </div>

            {/* Main Heading */}
            <div style={{ zIndex: 2, textAlign: 'center', marginBottom: '50px' }}>
                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{
                        fontSize: "3.5rem",
                        fontWeight: "800",
                        background: "linear-gradient(to right, #fff, #00f2ea)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        marginBottom: "10px",
                        fontFamily: "'Orbitron', sans-serif" // Assuming this font is available or fallbacks
                    }}
                >
                    MONK NETWORKS
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    style={{ color: "#a0a0a0", fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto" }}
                >
                    Next-Gen Infrastructure for the Digital Age
                </motion.p>
            </div>

            {/* Grid Container for 3D Elements */}
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '20px',
                    width: '90%',
                    maxWidth: '1200px',
                    zIndex: 2
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <ServerInfrastructure />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <CloudStorage />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <ConfigurationControl />
                </motion.div>
            </div>
        </section>
    );
};

export default NewHero;
