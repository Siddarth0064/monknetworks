import React from 'react';
import { motion } from 'framer-motion';

const DataStreams = ({ stage }) => {
    if (stage < 4) return null;

    return (
        <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100px',
            height: '200px', // Connects bottom (server) to top (cloud)
            pointerEvents: 'none',
            zIndex: 5
        }}>
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: -100, opacity: [0, 1, 0] }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                        ease: "linear"
                    }}
                    style={{
                        position: 'absolute',
                        left: `${10 + Math.random() * 80}%`,
                        width: '2px',
                        height: '10px',
                        background: '#00f2ea',
                        boxShadow: '0 0 5px #00f2ea'
                    }}
                />
            ))}
        </div>
    );
};

export default DataStreams;
