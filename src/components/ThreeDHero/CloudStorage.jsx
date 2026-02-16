import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CloudStorage = () => {
    const [uploading, setUploading] = useState(false);
    const [progress, setProgress] = useState(0);

    const handleUpload = () => {
        if (uploading) return;
        setUploading(true);
        setProgress(0);

        let interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setUploading(false), 1000);
                    return 100;
                }
                return prev + 5;
            });
        }, 100);
    };

    return (
        <div style={{ padding: '20px', textAlign: 'center', color: 'white' }}>
            <motion.h3
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={{ fontFamily: 'Orbitron, sans-serif', color: '#00f2ea', marginBottom: '20px' }}
            >
                Cloud Storage <br />
                <span style={{ fontSize: '0.8rem', color: '#ccc' }}>Secure & Scalable</span>
            </motion.h3>

            <div style={{ position: 'relative', height: '250px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

                {/* Cloud Icon */}
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                    <svg width="120" height="auto" viewBox="0 0 24 24" fill="none" stroke="#00f2ea" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
                    </svg>
                </motion.div>

                {/* Floating Files */}
                <AnimatePresence>
                    {!uploading && (
                        <>
                            {/* File 1 - PDF */}
                            <motion.div
                                animate={{ y: [0, -40], opacity: [0, 1, 0], x: [20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, delay: 0 }}
                                style={{ position: 'absolute', top: '70%', right: '20%', fontSize: '20px', color: '#fff' }}
                            >
                                📄
                            </motion.div>
                            {/* File 2 - DB */}
                            <motion.div
                                animate={{ y: [0, -50], opacity: [0, 1, 0], x: [-20, 0] }}
                                transition={{ duration: 5, repeat: Infinity, delay: 2 }}
                                style={{ position: 'absolute', top: '70%', left: '20%', fontSize: '20px', color: '#fff' }}
                            >
                                🗄️
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>

                {/* Upload Interaction */}
                <div style={{ marginTop: '30px', width: '100%', maxWidth: '200px' }}>
                    {!uploading ? (
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(0, 242, 234, 0.5)" }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleUpload}
                            style={{
                                padding: '10px 25px',
                                background: 'transparent',
                                border: '1px solid #00f2ea',
                                borderRadius: '20px',
                                color: '#00f2ea',
                                cursor: 'pointer',
                                fontSize: '0.9rem',
                                fontWeight: 'bold'
                            }}
                        >
                            Start Sync
                        </motion.button>
                    ) : (
                        <div style={{ width: '100%', height: '10px', background: '#333', borderRadius: '5px', overflow: 'hidden' }}>
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                style={{ height: '100%', background: '#00f2ea' }}
                            />
                        </div>
                    )}
                    {uploading && <p style={{ fontSize: '0.8rem', marginTop: '5px', color: '#aaa' }}>{progress === 100 ? 'Synced!' : 'Syncing...'}</p>}
                </div>

            </div>
        </div>
    );
};

export default CloudStorage;
