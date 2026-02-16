import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ConfigurationControl = () => {
    const [scale, setScale] = useState(1);

    return (
        <div style={{ padding: '20px', textAlign: 'center', color: 'white' }}>
            <motion.h3
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                style={{ fontFamily: 'Orbitron, sans-serif', color: '#00f2ea', marginBottom: '20px' }}
            >
                Start Scaling <br />
                <span style={{ fontSize: '0.8rem', color: '#ccc' }}>Total Control</span>
            </motion.h3>

            <div style={{
                background: 'rgba(20, 20, 20, 0.8)',
                border: '1px solid #333',
                borderRadius: '10px',
                padding: '20px',
                height: '250px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}>

                {/* Visual Representation of Scale */}
                <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px', flexWrap: 'wrap' }}>
                    {[...Array(scale)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 200, damping: 10 }}
                            style={{
                                width: '20px',
                                height: '20px',
                                background: '#00f2ea',
                                borderRadius: '4px',
                                boxShadow: '0 0 10px rgba(0,242,234,0.5)'
                            }}
                        />
                    ))}
                </div>

                {/* Control Sliders */}
                <div style={{ marginTop: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '5px', color: '#aaa' }}>
                        <span>Capacity</span>
                        <span>{scale}x Nodes</span>
                    </div>
                    <input
                        type="range"
                        min="1"
                        max="8"
                        value={scale}
                        onChange={(e) => setScale(parseInt(e.target.value))}
                        style={{
                            width: '100%',
                            accentColor: '#00f2ea',
                            cursor: 'pointer'
                        }}
                    />

                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginTop: '15px', marginBottom: '5px', color: '#aaa' }}>
                        <span>Performance</span>
                    </div>
                    {/* Dummy slider for visual effect */}
                    <input
                        type="range"
                        min="1"
                        max="100"
                        defaultValue="60"
                        style={{
                            width: '100%',
                            accentColor: '#007bff',
                            cursor: 'pointer'
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default ConfigurationControl;
