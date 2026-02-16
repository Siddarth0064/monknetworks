import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ServerInfrastructure = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div style={{ padding: '20px', textAlign: 'center', color: 'white' }}>
            <motion.h3
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{ fontFamily: 'Orbitron, sans-serif', color: '#00f2ea', marginBottom: '20px' }}
            >
                Server & Infrastructure <br />
                <span style={{ fontSize: '0.8rem', color: '#ccc' }}>High Performance Hardware</span>
            </motion.h3>

            <motion.div
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                style={{
                    width: '150px',
                    height: '250px',
                    background: 'linear-gradient(135deg, #1a1a1a, #0d0d0d)',
                    border: '2px solid #333',
                    borderRadius: '10px',
                    margin: '0 auto',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: isHovered ? '0 0 30px rgba(0, 242, 234, 0.4)' : '0 0 10px rgba(0,0,0,0.5)',
                    transition: 'box-shadow 0.3s ease',
                    cursor: 'pointer'
                }}
            >
                {/* Server Blades */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ x: -10 }}
                        animate={{ x: 0 }}
                        transition={{
                            repeat: Infinity,
                            repeatType: "reverse",
                            duration: 2,
                            delay: i * 0.2
                        }}
                        style={{
                            height: '25px',
                            background: '#222',
                            margin: '10px 5px',
                            borderLeft: '4px solid #00f2ea',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            paddingRight: '5px'
                        }}
                    >
                        {/* LED Lights */}
                        <motion.div
                            animate={{ opacity: [0.2, 1, 0.2] }}
                            transition={{ duration: 0.8, repeat: Infinity, delay: Math.random() }}
                            style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00f2ea' }}
                        />
                        <div style={{ width: '4px' }} />
                        <motion.div
                            animate={{ opacity: [0.2, 1, 0.2] }}
                            transition={{ duration: 1.2, repeat: Infinity, delay: Math.random() }}
                            style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00ff00' }}
                        />
                    </motion.div>
                ))}

                {/* Data Packet Orb */}
                <motion.div
                    animate={{
                        y: [0, 200],
                        opacity: [0, 1, 0]
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "linear",
                        repeatDelay: 0.5
                    }}
                    style={{
                        position: 'absolute',
                        top: '10px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        background: '#00f2ea',
                        boxShadow: '0 0 10px #00f2ea'
                    }}
                />
            </motion.div>

            <p style={{ marginTop: '15px', color: '#888', fontSize: '0.9rem' }}>
                99.99% Uptime Guaranteed
            </p>
        </div>
    );
};

export default ServerInfrastructure;
