import React from 'react';
import { motion } from 'framer-motion';

const CyberStorm = () => {
    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            pointerEvents: 'none',
            zIndex: 10
        }}>
            {/* Red Scanning Line */}
            <motion.div
                initial={{ top: '-10%' }}
                animate={{ top: '110%' }}
                transition={{ duration: 1.5, ease: "linear", repeat: 2 }}
                style={{
                    position: 'absolute',
                    left: 0,
                    width: '100%',
                    height: '20px',
                    background: 'linear-gradient(to bottom, transparent, rgba(255, 0, 0, 0.8), transparent)',
                    boxShadow: '0 0 20px rgba(255, 0, 0, 0.5)'
                }}
            />

            {/* Central Energy Pulse */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 5, 20], opacity: [0, 1, 0] }}
                transition={{ duration: 2, times: [0, 0.2, 1] }}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, #00f2ea 0%, transparent 70%)',
                    zIndex: 11
                }}
            />
        </div>
    );
};

export default CyberStorm;
