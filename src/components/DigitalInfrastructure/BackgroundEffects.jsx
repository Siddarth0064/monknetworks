import React from 'react';
import { motion } from 'framer-motion';

const BackgroundEffects = () => {
    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            pointerEvents: 'none',
            zIndex: 1
        }}>
            {/* Subtle Rotating Digital Grid under server - positioned lower center */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                style={{
                    position: 'absolute',
                    top: '60%',
                    left: '50%',
                    width: '800px',
                    height: '800px',
                    background: 'radial-gradient(circle, rgba(0, 242, 234, 0.05) 0%, transparent 70%)',
                    border: '1px dashed rgba(0, 242, 234, 0.1)',
                    borderRadius: '50%',
                    transform: 'translate(-50%, -50%) perspective(1000px) rotateX(60deg)'
                }}
            />

            {/* Floating Holographic Particles */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight,
                        opacity: 0
                    }}
                    animate={{
                        y: [null, Math.random() * window.innerHeight],
                        opacity: [0, 0.5, 0]
                    }}
                    transition={{
                        duration: 10 + Math.random() * 10,
                        repeat: Infinity,
                        ease: "linear",
                        delay: Math.random() * 5
                    }}
                    style={{
                        position: 'absolute',
                        width: '2px',
                        height: '2px',
                        background: '#00f2ea', // Cyan
                        boxShadow: '0 0 2px #00f2ea',
                        borderRadius: '50%'
                    }}
                />
            ))}

            {/* Soft Glow Bloom via CSS */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '600px',
                height: '400px',
                background: 'radial-gradient(ellipse, rgba(0, 242, 234, 0.03), transparent)',
                transform: 'translate(-50%, -50%)',
                filter: 'blur(50px)',
                zIndex: 0
            }} />
        </div>
    );
};

export default BackgroundEffects;
