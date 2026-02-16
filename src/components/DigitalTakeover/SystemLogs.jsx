import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const logs = [
    "Initializing secure server...",
    "Encryption protocol active...",
    "Bypassing firewall...",
    "Incoming traffic detected...",
    "Optimizing neural network...",
    "Handshake established...",
    "System breach averted...",
    "Scaling infrastructure..."
];

const SystemLogs = () => {
    const [lines, setLines] = useState([]);

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setLines(prev => [...prev, logs[index % logs.length]].slice(-5)); // Keep last 5 lines
            index++;
        }, 300);
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{
            position: 'absolute',
            bottom: '20px',
            left: '20px',
            fontFamily: 'monospace',
            color: '#0f0',
            fontSize: '14px',
            zIndex: 2,
            textShadow: '0 0 5px #0f0'
        }}>
            {lines.map((line, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    style={{ marginBottom: '5px' }}
                >
                    {`> ${line}`}
                </motion.div>
            ))}
        </div>
    );
};

export default SystemLogs;
