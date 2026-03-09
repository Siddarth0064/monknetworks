import React, { useMemo } from 'react';
import { motion, useScroll, useTransform, useSpring, useVelocity } from 'framer-motion';

const AnimatedBackground = () => {
    const { scrollY, scrollYProgress } = useScroll();
    const scrollVelocity = useVelocity(scrollY);

    // Smooth both progress and velocity for cinematic feel
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 40,
        damping: 20
    });

    const smoothVelocity = useSpring(scrollVelocity, {
        stiffness: 60,
        damping: 30
    });

    const nodeCount = 18;
    const nodes = useMemo(() => {
        return [...Array(nodeCount)].map((_, i) => {
            // Random start positions - REDUCED DISTANCE
            const angle = (i / nodeCount) * Math.PI * 2;
            const distance = 40 + Math.random() * 20;
            return {
                id: i,
                startX: Math.cos(angle) * distance,
                startY: Math.sin(angle) * distance,
                size: 40 + Math.random() * 60, // Reduced from 60 + 80
                color: Math.random() > 0.8 ? 'var(--primary-energy)' : '#00f2ea',
                rotation: Math.random() * 360,
                delay: Math.random() * 0.5
            };
        });
    }, [nodeCount]);

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 0,
            background: '#040812',
            overflow: 'hidden',
            pointerEvents: 'none'
        }}>
            {/* Background Gradient */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle at 50% 50%, #0a1428 0%, #040812 100%)',
                opacity: 0.8
            }} />

            {/* Central Network Core */}
            <NetworkCore progress={smoothProgress} velocity={smoothVelocity} />

            {/* Converging Nodes */}
            {nodes.map(node => (
                <ConvergingNode key={node.id} node={node} progress={smoothProgress} />
            ))}

            {/* Connection SVG Layer */}
            <ConnectionLines nodes={nodes} progress={smoothProgress} />
        </div>
    );
};

const NetworkCore = ({ progress, velocity }) => {
    const scale = useTransform(progress, [0, 1], [0.8, 1.4]);
    // REACHES CENTER EARLIER (by 30% scroll instead of 60%)
    const yOffset = useTransform(progress, [0, 0.3], ['120vh', '-50%']);
    // EVEN LIGHTER OPACITY (max 0.4)
    const opacity = useTransform(progress, [0, 0.2], [0.1, 0.35]);

    // RED/ORANGE SHIFT: Transform velocity to color
    // We use Math.abs because scrolling up or down should trigger the "energy" shift
    const coreColor = useTransform(
        velocity,
        [-3000, -500, 0, 500, 3000],
        ["#ff4d00", "#00f2ea", "#00f2ea", "#00f2ea", "#ff4d00"]
    );

    const glowColor = useTransform(
        velocity,
        [-2000, 0, 2000],
        ["rgba(255, 77, 0, 0.25)", "rgba(0, 242, 234, 0.15)", "rgba(255, 77, 0, 0.25)"] // Further reduced
    );

    return (
        <motion.div
            style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '80px', // Reduced from 120px
                height: '80px', // Reduced from 120px
                x: '-50%',
                y: yOffset,
                borderRadius: '50%',
                background: useTransform(coreColor, c => `radial-gradient(circle, ${c} 15%, transparent 70%)`),
                boxShadow: useTransform(glowColor, g => `0 0 30px ${g}, inset 0 0 10px ${g}`), // Smaller glow radius
                scale,
                opacity,
                zIndex: 10,
                border: '1px solid rgba(255, 255, 255, 0.03)'
            }}
        >
            {/* Pulsing Core Detail */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }} // Whisper light
                transition={{ duration: 3, repeat: Infinity }}
                style={{
                    position: 'absolute',
                    inset: '20%',
                    background: coreColor,
                    borderRadius: '50%',
                    filter: 'blur(20px)'
                }}
            />
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                style={{
                    position: 'absolute',
                    inset: -15,
                    border: '1px dashed rgba(0, 242, 234, 0.2)',
                    borderRadius: '50%'
                }}
            />
        </motion.div>
    );
};

const ConvergingNode = ({ node, progress }) => {
    // Interpolate from start position to center
    const x = useTransform(progress, [0, 1], [`${50 + node.startX}%`, '50%']);
    const y = useTransform(progress, [0, 1], [`${50 + node.startY}%`, '50%']);
    const opacity = useTransform(progress, [0, 0.2, 0.8, 1], [0, 0.6, 0.8, 0.2]);
    const scale = useTransform(progress, [0, 1], [1, 0.2]);

    return (
        <motion.div
            style={{
                position: 'absolute',
                width: node.size,
                height: node.size,
                left: x,
                top: y,
                x: '-50%',
                y: '-50%',
                border: `1px solid ${node.color}44`,
                background: `${node.color}11`,
                borderRadius: '4px',
                opacity,
                scale,
                rotate: node.rotation,
                zIndex: 5
            }}
        >
            {/* Inner "Object" - Abstract Server Blade/Component */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '10%',
                right: '10%',
                height: '4px',
                background: node.color,
                boxShadow: `0 0 10px ${node.color}`
            }} />
        </motion.div>
    );
};

const ConnectionLines = ({ nodes, progress }) => {
    const lineOpacity = useTransform(progress, [0, 0.5, 1], [0, 0.2, 0.05]);

    return (
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
            {nodes.map(node => (
                <ConnectionLine key={node.id} node={node} progress={progress} lineOpacity={lineOpacity} />
            ))}
        </svg>
    );
};

const ConnectionLine = ({ node, progress, lineOpacity }) => {
    // Interpolate x1,y1 
    const x1 = useTransform(progress, [0, 1], [`${50 + node.startX}%`, '50%']);
    const y1 = useTransform(progress, [0, 1], [`${50 + node.startY}%`, '50%']);

    return (
        <motion.line
            x1={x1}
            y1={y1}
            x2="50%"
            y2="50%"
            stroke={node.color}
            strokeWidth="2"
            opacity={lineOpacity}
        />
    );
};

export default AnimatedBackground;
