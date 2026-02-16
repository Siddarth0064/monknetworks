import React, { useRef, useEffect } from "react";

const IllusionBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return; // safety
        const ctx = canvas.getContext("2d");
        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();

        // Configuration
        const gap = 40;
        let mouse = { x: -1000, y: -1000 };
        let time = 0;

        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };
        window.addEventListener("mousemove", handleMouseMove);

        // Render loop
        const render = () => {
            ctx.fillStyle = "#0a0a0a";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            time += 0.03;

            let grid = [];

            for (let x = -100; x < canvas.width + 100; x += gap) {
                let col = [];
                for (let y = -100; y < canvas.height + 100; y += gap) {
                    // Wave Logic
                    const dx = mouse.x - x;
                    const dy = mouse.y - y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const maxDist = 400;

                    let moveX = 0;
                    let moveY = 0;
                    let scale = 1;

                    if (dist < maxDist) {
                        const force = Math.pow((maxDist - dist) / maxDist, 3) * 100;
                        const angle = Math.atan2(dy, dx);
                        moveX = Math.cos(angle) * force;
                        moveY = Math.sin(angle) * force;
                        scale = 1 + force / 50;
                    }

                    const wave = Math.sin(x * 0.005 + time) * Math.cos(y * 0.005 + time) * 30;

                    col.push({
                        x: x + moveX,
                        y: y + moveY + wave,
                        r: scale
                    });
                }
                grid.push(col);
            }

            // Draw Grid
            ctx.strokeStyle = "rgba(0, 242, 234, 0.2)";
            for (let ix = 0; ix < grid.length; ix++) {
                for (let iy = 0; iy < grid[ix].length; iy++) {
                    const p = grid[ix][iy];

                    // Draw horizontal line
                    if (ix < grid.length - 1) {
                        const nextP = grid[ix + 1][iy];
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(nextP.x, nextP.y);
                        ctx.stroke();
                    }
                    // Draw vertical line
                    if (iy < grid[ix].length - 1) {
                        const nextP = grid[ix][iy + 1];
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(nextP.x, nextP.y);
                        ctx.stroke();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: -1,
                background: "#0a0a0a"
            }}
        />
    );
};

export default IllusionBackground;
