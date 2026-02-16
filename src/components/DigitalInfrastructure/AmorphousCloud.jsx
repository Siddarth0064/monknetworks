import React from 'react';
import { motion } from 'framer-motion';

const AmorphousCloud = ({ stage }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={stage >= 2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.5 }}
            style={{
                position: 'absolute',
                top: '-100px', // Positioned above server
                width: '120px',
                height: '80px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 10
            }}
        >
            {/* Main Cloud Form (SVG) with Soft Cyan Glow */}
            <motion.svg
                width="100" height="60" viewBox="0 0 24 24"
                fill="none"
                stroke="#00ffff" // Cyan
                strokeWidth="0.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                animate={stage >= 2 ? { y: [0, -5, 0] } : {}}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{ filter: 'drop-shadow(0 0 8px rgba(0, 255, 255, 0.3))' }}
            >
                <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" fill="rgba(0, 255, 255, 0.05)" />
            </motion.svg>

            {/* Swirling Particles around cloud */}
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={stage >= 2 ? { rotate: 360 } : {}}
                    transition={{ duration: 8 + i, repeat: Infinity, ease: "linear" }}
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        border: '1px dashed rgba(0, 255, 255, 0.1)',
                    }}
                />
            ))}
        </motion.div>
    );
};

export default AmorphousCloud;
