import React from 'react';
import { motion } from 'framer-motion';

const OsPanels = ({ stage }) => {
    return (
        <>
            {/* Left Panel: Windows Style (Cool Light Blue) */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={stage >= 3 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1 }}
                style={{
                    position: 'absolute',
                    left: '-180px', // Adjusted offset from center
                    top: '20%',
                    width: '140px',
                    height: '100px',
                    background: 'rgba(200, 220, 255, 0.05)', // Glassy
                    border: '1px solid rgba(100, 150, 255, 0.3)',
                    borderRadius: '4px',
                    backdropFilter: 'blur(5px)',
                    padding: '10px',
                    zIndex: 5
                }}
            >
                {/* Title Bar */}
                <div style={{ width: '100%', height: '15px', background: 'rgba(100, 150, 255, 0.2)', marginBottom: '10px', borderRadius: '2px' }} />
                {/* Content Blocks */}
                <div style={{ display: 'flex', gap: '5px' }}>
                    <div style={{ width: '30%', height: '40px', background: 'rgba(100, 150, 255, 0.1)' }} />
                    <div style={{ width: '65%', height: '40px', background: 'rgba(100, 150, 255, 0.1)' }} />
                </div>
            </motion.div>

            {/* Right Panel: Linux Style (Neon Green Text) */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={stage >= 3 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1, delay: 0.2 }} // Slight stagger
                style={{
                    position: 'absolute',
                    right: '-180px', // Adjusted offset from center
                    top: '20%',
                    width: '140px',
                    height: '100px',
                    background: 'rgba(0, 20, 0, 0.3)', // Darker
                    border: '1px solid rgba(0, 255, 0, 0.2)',
                    borderRadius: '4px',
                    padding: '10px',
                    fontFamily: 'monospace',
                    fontSize: '8px',
                    color: '#0f0', // Neon Green
                    overflow: 'hidden',
                    zIndex: 5
                }}
            >
                <div style={{ opacity: 0.7 }}>root@server:~#</div>
                <div style={{ marginTop: '5px' }}>$ apt update</div>
                <div style={{ marginTop: '2px' }}>$ systemctl start nginx</div>
                <div style={{ marginTop: '2px', color: '#fff' }}>[OK] Started.</div>
                <motion.div
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    style={{ marginTop: '5px', width: '5px', height: '10px', background: '#0f0' }}
                />
            </motion.div>
        </>
    );
};

export default OsPanels;
