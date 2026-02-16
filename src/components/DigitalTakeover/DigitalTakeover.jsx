import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Reuse components from DigitalAwakening as they match the requested visual exactly
import PulseGrid from '../DigitalAwakening/PulseGrid';
import ServerCore from '../DigitalAwakening/ServerCore';
import HoloCloud from '../DigitalAwakening/HoloCloud';
import DataStreams from '../DigitalAwakening/DataStreams';

const DigitalTakeover = () => {
    const [stage, setStage] = useState(0);

    useEffect(() => {
        // Sequence Timings matches the requested "Pulse -> Grid -> Server -> Cloud" flow
        const timeouts = [
            setTimeout(() => setStage(1), 500),  // Pulse start
            setTimeout(() => setStage(2), 2500), // Grid expand
            setTimeout(() => setStage(3), 3500), // Server rise
            setTimeout(() => setStage(4), 5000), // Cloud & Data
            setTimeout(() => setStage(5), 6500), // App frames
            setTimeout(() => setStage(6), 8000), // Final Logo / Stabilization
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

            {/* Company Name - Always Visible or Fade In */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                style={{
                    position: 'absolute',
                    top: '100px', // Adjusted for navbar
                    zIndex: 30,
                    width: '100%',
                    textAlign: 'center'
                }}
            >
                <h2 style={{
                    fontFamily: 'Orbitron, sans-serif',
                    color: '#fff',
                    letterSpacing: '5px',
                    fontSize: '1.5rem',
                    textTransform: 'uppercase',
                    textShadow: '0 0 10px rgba(0, 242, 234, 0.5)'
                }}>
                    Monk Networks
                </h2>
            </motion.div>

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
                gap: '50px'
            }}>
                {/* Upper Layer: Cloud */}
                <HoloCloud stage={stage} />

                {/* Data Streams */}
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

            {/* Final Logo at Center */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={stage >= 6 ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1.5 }}
                style={{
                    position: 'absolute',
                    zIndex: 25,
                    textAlign: 'center',
                    pointerEvents: 'none',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    padding: '20px'
                }}
            >
                {/* MN Initials / Logo Overlay */}
                <h1 style={{
                    fontSize: '8rem', // Large background logo
                    fontFamily: 'Orbitron, sans-serif',
                    color: 'rgba(255, 255, 255, 0.05)',
                    textShadow: '0 0 50px rgba(0,242,234,0.2)',
                    margin: 0,
                    pointerEvents: 'none'
                }}>
                    MN
                </h1>
            </motion.div>

        </section>
    );
};

export default DigitalTakeover;
