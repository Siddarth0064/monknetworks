import React from 'react';
import { motion } from 'framer-motion';

const PulseGrid = ({ stage }) => {
    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
            overflow: 'hidden',
        }}>
            {/* Background Gradient */}
            <div style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle at center, #0a1f30 0%, #000000 70%)',
            }} />

            {/* Initial Pulse */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={stage >= 1 ? { scale: [0, 1.5, 3], opacity: [0, 0.8, 0] } : {}}
                transition={{ duration: 2, ease: "easeOut" }}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    border: '2px solid #00f2ea',
                    boxShadow: '0 0 20px #00f2ea',
                    zIndex: 1
                }}
            />

            {/* Expanding Grid */}
            <motion.div
                initial={{ opacity: 0, perspective: 1000, rotateX: 60, scale: 0.5 }}
                animate={stage >= 2 ? { opacity: 0.3, perspective: 1000, rotateX: 60, scale: 1.5, y: 100 } : {}}
                transition={{ duration: 3, ease: "easeInOut" }}
                style={{
                    position: 'absolute',
                    top: '50%', // Start lower
                    left: '-50%',
                    width: '200%',
                    height: '200%',
                    backgroundImage: `
                        linear-gradient(rgba(0, 242, 234, 0.3) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0, 242, 234, 0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px',
                    transformStyle: 'preserve-3d',
                }}
            />
        </div>
    );
};

export default PulseGrid;
