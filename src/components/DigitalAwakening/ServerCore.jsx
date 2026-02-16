import React from 'react';
import { motion } from 'framer-motion';

const ServerCore = ({ stage }) => {
    return (
        <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={stage >= 3 ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 2, ease: "easeOut" }}
            style={{
                position: 'relative',
                width: '120px',
                height: '200px',
                background: 'linear-gradient(to bottom, #1a1a1a, #0d0d0d)',
                border: '1px solid #333',
                borderRadius: '8px',
                boxShadow: '0 0 30px rgba(0,0,0,0.8)',
                zIndex: 10,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                padding: '10px 0'
            }}
        >
            {/* Top Vent */}
            <div style={{ width: '100%', height: '10px', background: '#222', marginBottom: '5px' }} />

            {/* Server Blades */}
            {[...Array(5)].map((_, i) => (
                <div key={i} style={{
                    height: '20px',
                    background: '#111',
                    margin: '2px 10px',
                    borderBottom: '1px solid #333',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    paddingRight: '5px'
                }}>
                    {/* Activity LEDs */}
                    <motion.div
                        animate={stage >= 4 ? { opacity: [0.2, 1, 0.2] } : {}}
                        transition={{ duration: 0.5 + Math.random(), repeat: Infinity, delay: i * 0.2 }}
                        style={{
                            width: '4px',
                            height: '4px',
                            borderRadius: '50%',
                            background: '#00f2ea',
                            boxShadow: '0 0 5px #00f2ea'
                        }}
                    />
                </div>
            ))}

            {/* Base Glow */}
            <motion.div
                animate={stage >= 3 ? { opacity: [0.5, 0.8, 0.5] } : {}}
                transition={{ duration: 3, repeat: Infinity }}
                style={{
                    position: 'absolute',
                    bottom: '-10px',
                    left: '10%',
                    width: '80%',
                    height: '10px',
                    background: '#00f2ea',
                    filter: 'blur(15px)',
                    zIndex: -1
                }}
            />
        </motion.div>
    );
};

export default ServerCore;
