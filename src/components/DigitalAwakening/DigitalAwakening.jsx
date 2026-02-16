import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PulseGrid from './PulseGrid';
import ServerCore from './ServerCore';
import HoloCloud from './HoloCloud';
import DataStreams from './DataStreams';

const DigitalAwakening = () => {
    const [stage, setStage] = useState(0);

    useEffect(() => {
        // Sequence Timings
        const timeouts = [
            setTimeout(() => setStage(1), 500),  // Pulse start
            setTimeout(() => setStage(2), 2500), // Grid expand
            setTimeout(() => setStage(3), 3500), // Server rise
            setTimeout(() => setStage(4), 5000), // Cloud & Data
            setTimeout(() => setStage(5), 6500), // App frames
            setTimeout(() => setStage(6), 8000), // Final Logo & Text
        ];

        return () => timeouts.forEach(clearTimeout);
    }, []);

    return (
        <section style={{
            position: 'relative',
            width: '100%',
            height: '100vh',
            overflow: 'hidden',
            background: '#000',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <PulseGrid stage={stage} />

            {/* Central Composition */}
            <div style={{
                position: 'relative',
                zIndex: 10,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '60%',
                justifyContent: 'center',
                gap: '50px' // Space between Cloud and Server
            }}>
                {/* Upper Layer: Cloud */}
                <HoloCloud stage={stage} />

                {/* Data Streams (Absolute positioned relative to this container or handled internally) */}
                <DataStreams stage={stage} />

                {/* Lower Layer: Server */}
                <ServerCore stage={stage} />

                {/* Floating UI Frames (Stage 5) */}
                <AnimatePresence>
                    {stage >= 5 && (
                        <>
                            {/* Left Frame: Mobile App */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}
                                style={{
                                    position: 'absolute',
                                    left: '-120px',
                                    top: '40%',
                                    width: '80px',
                                    height: '140px',
                                    border: '1px solid rgba(0,242,234,0.3)',
                                    borderRadius: '10px',
                                    background: 'rgba(0,0,0,0.5)',
                                    backdropFilter: 'blur(5px)'
                                }}
                            />
                            {/* Right Frame: Desktop Web */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}
                                style={{
                                    position: 'absolute',
                                    right: '-160px',
                                    top: '30%',
                                    width: '140px',
                                    height: '100px',
                                    border: '1px solid rgba(0,242,234,0.3)',
                                    borderRadius: '5px',
                                    background: 'rgba(0,0,0,0.5)',
                                    backdropFilter: 'blur(5px)'
                                }}
                            />
                        </>
                    )}
                </AnimatePresence>
            </div>

            {/* Final Logo & Text Overlay (Stage 6) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={stage >= 6 ? { opacity: 1 } : {}}
                transition={{ duration: 1.5 }}
                style={{
                    position: 'absolute',
                    zIndex: 20,
                    textAlign: 'center',
                    pointerEvents: 'none' // Allow clicking through if needed, or set to auto for buttons
                }}
            >
                <h1 style={{
                    fontSize: '4rem',
                    fontFamily: 'Orbitron, sans-serif',
                    color: '#fff',
                    textShadow: '0 0 20px rgba(0,242,234,0.5)',
                    marginBottom: '10px'
                }}>
                    MONK NETWORKS
                </h1>
                <p style={{
                    fontSize: '1.2rem',
                    color: '#ccc',
                    letterSpacing: '2px'
                }}>
                    INFRASTRUCTURE AWAKENED
                </p>

                {/* Optional CTA Button could appear here */}
                <div style={{ marginTop: '30px', pointerEvents: 'auto' }}>
                    {/* Button code */}
                </div>
            </motion.div>

        </section>
    );
};

export default DigitalAwakening;
