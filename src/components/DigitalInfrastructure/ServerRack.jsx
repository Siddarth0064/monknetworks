import React from 'react';
import { motion } from 'framer-motion';

const ServerRack = ({ stage }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
            animate={stage >= 1 ? { opacity: 1, scale: 1, rotateY: [0, 5, 0, -5, 0] } : {}}
            transition={{
                duration: 1.5,
                rotateY: { duration: 10, repeat: Infinity, ease: "linear" }
            }}
            style={{
                position: 'relative',
                width: '120px',
                height: '220px',
                // Sleek Metallic Gradient
                background: 'linear-gradient(135deg, #2c3e50, #000)',
                border: '1px solid rgba(0, 242, 234, 0.5)',
                borderRadius: '4px',
                boxShadow: '0 0 50px rgba(0, 242, 234, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                padding: '15px 0',
                zIndex: 10,
                transformStyle: 'preserve-3d'
            }}
        >
            {/* Ripple Rings - Expanding outward */}
            {stage >= 1 && (
                <>
                    <motion.div
                        animate={{ width: ['120%', '300%'], height: ['20px', '50px'], opacity: [0.8, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
                        style={{
                            position: 'absolute',
                            bottom: '-10px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            border: '1px solid rgba(0, 242, 234, 0.5)',
                            borderRadius: '50%',
                            zIndex: -1
                        }}
                    />
                    <motion.div
                        animate={{ width: ['120%', '300%'], height: ['20px', '50px'], opacity: [0.8, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 1.5 }}
                        style={{
                            position: 'absolute',
                            bottom: '-10px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            border: '1px solid rgba(0, 242, 234, 0.3)',
                            borderRadius: '50%',
                            zIndex: -1
                        }}
                    />
                </>
            )}

            {/* Server Units inside Rack */}
            {[...Array(6)].map((_, i) => (
                <div key={i} style={{
                    height: '24px',
                    background: 'rgba(0, 0, 0, 0.6)',
                    margin: '0 10px',
                    borderLeft: '2px solid #00f2ea', // Electric Blue Accent
                    borderRight: '1px solid #333',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    paddingRight: '8px'
                }}>
                    <motion.div
                        animate={stage >= 1 ? { opacity: [0.3, 1, 0.3] } : {}}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
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

        </motion.div>
    );
};

export default ServerRack;
