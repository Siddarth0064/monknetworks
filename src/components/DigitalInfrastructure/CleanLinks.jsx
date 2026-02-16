import React from 'react';
import { motion } from 'framer-motion';

const CleanLinks = ({ stage }) => {
    if (stage < 4) return null;

    return (
        <div style={{ position: 'absolute', width: '100%', height: '100%', pointerEvents: 'none' }}>

            {/* Center Vertical Line (Server <-> Cloud) */}
            <div style={{
                position: 'absolute', left: '50%', top: '45%',
                width: '2px', height: '60px',
                background: 'linear-gradient(to top, rgba(0,242,234,0.8), transparent)', // Cyan Glow
                boxShadow: '0 0 10px rgba(0,242,234,0.5)',
                transform: 'translateX(-50%)'
            }} />

            {/* Left Horizontal Line (Cloud <-> Windows) */}
            <div style={{
                position: 'absolute', left: '35%', top: '35%',
                width: '15%', height: '2px',
                background: 'linear-gradient(to right, transparent, rgba(0,242,234,0.5))',
                boxShadow: '0 0 5px rgba(0,242,234,0.3)'
            }} />

            {/* Right Horizontal Line (Cloud <-> Linux) */}
            <div style={{
                position: 'absolute', right: '35%', top: '35%',
                width: '15%', height: '2px',
                background: 'linear-gradient(to left, transparent, rgba(0,242,234,0.5))',
                boxShadow: '0 0 5px rgba(0,242,234,0.3)'
            }} />

            {/* FLOWING FIBER OPTIC PARTICLES */}

            {/* Vertical Up Stream (Fast) */}
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={`v-${i}`}
                    animate={{ top: ['55%', '35%'], opacity: [0, 1, 0] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear", delay: i * 0.3 }}
                    style={{
                        position: 'absolute', left: '50%',
                        width: '3px', height: '15px',
                        background: '#fff',
                        boxShadow: '0 0 8px #fff',
                        borderRadius: '2px',
                        transform: 'translateX(-50%)'
                    }}
                />
            ))}

            {/* Horizontal Left Stream */}
            {[...Array(2)].map((_, i) => (
                <motion.div
                    key={`h-l-${i}`}
                    animate={{ left: ['50%', '30%'], opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
                    style={{
                        position: 'absolute', top: '35%',
                        width: '20px', height: '3px',
                        background: '#fff',
                        boxShadow: '0 0 8px #fff',
                        borderRadius: '2px'
                    }}
                />
            ))}

            {/* Horizontal Right Stream */}
            {[...Array(2)].map((_, i) => (
                <motion.div
                    key={`h-r-${i}`}
                    animate={{ left: ['50%', '70%'], opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: i * 0.5 + 0.2 }}
                    style={{
                        position: 'absolute', top: '35%',
                        width: '20px', height: '3px',
                        background: '#fff',
                        boxShadow: '0 0 8px #fff',
                        borderRadius: '2px'
                    }}
                />
            ))}
        </div>
    );
};

export default CleanLinks;
