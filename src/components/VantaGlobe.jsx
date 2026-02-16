import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";

const VantaGlobe = (props) => {
    const [vantaEffect, setVantaEffect] = useState(null);
    const myRef = useRef(null);

    useEffect(() => {
        if (!vantaEffect) {
            // Ensure THREE is available globally for the Vanta script
            window.THREE = THREE;

            const loadScript = (src) => {
                return new Promise((resolve, reject) => {
                    if (document.querySelector(`script[src="${src}"]`)) {
                        resolve();
                        return;
                    }
                    const script = document.createElement("script");
                    script.src = src;
                    script.async = true;
                    script.onload = () => resolve();
                    script.onerror = () => reject(new Error(`Failed to load ${src}`));
                    document.body.appendChild(script);
                });
            };

            loadScript("/js/vanta.globe.min.js")
                .then(() => {
                    if (!myRef.current) return;

                    if (window.VANTA && window.VANTA.GLOBE) {
                        try {
                            setVantaEffect(
                                window.VANTA.GLOBE({
                                    el: myRef.current,
                                    mouseControls: true,
                                    touchControls: true,
                                    gyroControls: false,
                                    minHeight: 200.00,
                                    minWidth: 200.00,
                                    scale: 1.00,
                                    scaleMobile: 1.00,
                                    backgroundColor: 0x0a0a0a,
                                    color: 0xff0055, // Neon Red
                                    color2: 0x0099ff, // Neon Blue
                                    size: 1,
                                    ...props
                                })
                            );
                        } catch (e) {
                            console.error("Vanta initialization failed", e);
                        }
                    } else {
                        console.error("VANTA.GLOBE not available");
                    }
                })
                .catch(err => console.error(err));
        }

        return () => {
            if (vantaEffect) {
                try {
                    vantaEffect.destroy();
                } catch (e) { console.warn(e) }
            }
        };
    }, [vantaEffect]);

    return (
        <div
            ref={myRef}
            style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                zIndex: -1
            }}
        />
    );
};

export default VantaGlobe;
