import React, { useEffect, useRef } from 'react';

const MatrixRain = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const columns = Math.floor(width / 20);
        const yPositions = Array(columns).fill(0);

        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, width, height);

        const matrix = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, width, height);

            ctx.fillStyle = '#0f0';
            ctx.font = '15px monospace';

            yPositions.forEach((y, index) => {
                const text = String.fromCharCode(Math.random() * 128);
                const x = index * 20;

                // Randomly color some characters blue/cyan for that "cyber" look
                if (Math.random() > 0.9) {
                    ctx.fillStyle = '#00f2ea';
                } else {
                    ctx.fillStyle = '#0f0';
                }

                ctx.fillText(text, x, y);

                if (y > height && Math.random() > 0.975) {
                    yPositions[index] = 0;
                } else {
                    yPositions[index] = y + 20;
                }
            });
        };

        const interval = setInterval(matrix, 50);

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 0,
                opacity: 0.3
            }}
        />
    );
};

export default MatrixRain;
