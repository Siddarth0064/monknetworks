import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ServerRack from './ServerRack';
import AmorphousCloud from './AmorphousCloud';
import OsPanels from './OsPanels';
import CleanLinks from './CleanLinks';
import BackgroundEffects from './BackgroundEffects';
import HeroContent from './HeroContent';


const DigitalInfrastructure = () => {
    const [stage, setStage] = useState(0);

    useEffect(() => {
        // Updated: Faster, more energetic timing
        const timeline = [
            setTimeout(() => setStage(1), 300),  // Server appears quickly
            setTimeout(() => setStage(2), 1200), // Cloud forms
            setTimeout(() => setStage(3), 2200), // Panels fade in
            setTimeout(() => setStage(4), 3000), // Links connect significantly faster
            // Stage 5 used to be just Logo, now it transitions to..
            setTimeout(() => setStage(6), 3800), // Layout Shift & Content Reveal quicker
        ];
        return () => timeline.forEach(clearTimeout);
    }, []);

    return (
        <section style={{
            position: 'relative',
            width: '100%',
            height: '100vh',
            // Updated Background: Deep Navy #0B1220
            background: 'radial-gradient(circle at center, #1a2639 0%, #0B1220 100%)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff'
        }}>

            <BackgroundEffects />

            {/* Container for 3D Elements that shifts LEFT on Stage 6 */}
            <motion.div
                initial={{ x: 0, scale: 1 }}
                animate={{
                    x: stage >= 6 ? '-25%' : '0%', // Shift Left
                    scale: stage >= 6 ? 0.9 : 1.05   // Slight scale down to fit side
                }}
                transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }} // Enterprise smooth curve
                style={{
                    position: 'relative',
                    zIndex: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center'
                }}
            >

                {/* Upper: Cloud */}
                <div style={{ position: 'relative', zIndex: 20 }}>
                    <AmorphousCloud stage={stage} />
                </div>

                {/* Connectivity Layer (Absolute over container) */}
                <CleanLinks stage={stage} />

                {/* Center: Server & Panels Wrapper */}
                <div style={{ position: 'relative', marginTop: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {/* Panels Absolute Relative to Center */}
                    <OsPanels stage={stage} />

                    {/* Center Piece */}
                    <ServerRack stage={stage} />
                </div>
            </motion.div>

            {/* Right Side Content Reveal */}
            <HeroContent stage={stage} />

            {/* Original "Monk Networks" Center Logo - Show ONLY in Stage 5, then Fade Out for Split Layout */}
            {stage === 5 && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                    style={{
                        position: 'absolute',
                        bottom: '15%',
                        textAlign: 'center',
                        zIndex: 30
                    }}
                >
                    <h1 style={{
                        fontSize: '3rem',
                        fontFamily: 'Orbitron, sans-serif',
                        letterSpacing: '5px',
                        textShadow: '0 0 20px rgba(0, 242, 234, 0.5)'
                    }}>
                        MONK NETWORKS
                    </h1>
                </motion.div>
            )}

        </section>
    );
};

export default DigitalInfrastructure;
