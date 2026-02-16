import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ServerCore from '../DigitalAwakening/ServerCore'; // Reusing existing healthy component
import HoloCloud from '../DigitalAwakening/HoloCloud'; // Reusing existing healthy component
import DataStreams from '../DigitalAwakening/DataStreams'; // Reusing existing healthy component

const InfrastructureDisplay = () => {
    // Stage logic internal to this display for the "stabilization" sequence
    // In this context, everything is "ready" so we pass high stage numbers to the child components
    // to ensure they render in their "final" state, or we animate them in.

    // We want them to "rise" out of the surge.
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{
                position: 'relative',
                zIndex: 20,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '60%',
                gap: '50px'
            }}
        >
            {/* Reusing components but passing a high stage so they appear fully formed or animate their internal loops */}
            <HoloCloud stage={5} />
            <DataStreams stage={5} />
            <ServerCore stage={5} />

            {/* Holographic Uptime Display */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                style={{
                    position: 'absolute',
                    top: '50%',
                    right: '-150px',
                    background: 'rgba(0, 242, 234, 0.1)',
                    border: '1px solid #00f2ea',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    color: '#00f2ea',
                    fontFamily: 'Orbitron, sans-serif',
                    boxShadow: '0 0 15px rgba(0, 242, 234, 0.3)'
                }}
            >
                <div style={{ fontSize: '0.8rem', color: '#fff' }}>SYSTEM STATUS</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>99.99%</div>
                <div style={{ fontSize: '0.7rem', color: '#0f0' }}>● ONLINE</div>
            </motion.div>
        </motion.div>
    );
};

export default InfrastructureDisplay;
