import React from 'react';
import { motion } from 'framer-motion';

const HoloCloud = ({ stage }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={stage >= 4 ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 2 }}
            style={{
                position: 'relative',
                width: '150px',
                height: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            {/* Cloud Shape */}
            <svg width="150" height="100" viewBox="0 0 24 24" fill="none" stroke="#00f2ea" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
                <motion.path
                    initial={{ pathLength: 0 }}
                    animate={stage >= 4 ? { pathLength: 1 } : {}}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"
                    fill="rgba(0, 242, 234, 0.05)"
                />
            </svg>

            {/* Internal Glow */}
            <motion.div
                animate={stage >= 4 ? { opacity: [0.3, 0.6, 0.3] } : {}}
                transition={{ duration: 4, repeat: Infinity }}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '80px',
                    height: '50px',
                    background: 'radial-gradient(circle, rgba(0,242,234,0.4) 0%, rgba(0,0,0,0) 70%)',
                    filter: 'blur(10px)'
                }}
            />
        </motion.div>
    );
};

export default HoloCloud;
