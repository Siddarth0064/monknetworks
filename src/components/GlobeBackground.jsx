import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";

const GlobeBackground = (props) => {
    const [vantaEffect, setVantaEffect] = useState(null);
    const myRef = useRef(null);

    useEffect(() => {
        if (!vantaEffect) {
            window.THREE = THREE;

            const script = document.createElement("script");
            script.src = "/vanta.globe.min.js";
            script.async = true;
            script.onload = () => {
                // Safety check: if component unmounted, myRef.current is null
                if (!myRef.current) return;

                if (window.VANTA && window.VANTA.GLOBE) {
                    try {
                        setVantaEffect(
                            window.VANTA.GLOBE({
                                el: myRef.current,
                                THREE: THREE, // Explicitly pass THREE to Vanta
                                mouseControls: true,
                                touchControls: true,
                                gyroControls: false,
                                minHeight: 200.00,
                                minWidth: 200.00,
                                scale: 1.00,
                                scaleMobile: 1.00,
                                backgroundColor: 0x23153c,
                                color: 0xff3f81,
                                color2: 0xffffff,
                                size: 1,
                                ...props
                            })
                        );
                    } catch (error) {
                        console.error("Vanta initialization error:", error);
                    }
                }
            };
            script.onerror = () => console.error("Failed to load Vanta script file");
            document.body.appendChild(script);

            return () => {
                // Cleanup function
                if (vantaEffect) {
                    try {
                        vantaEffect.destroy();
                    } catch (e) {
                        console.warn("Vanta destroy error", e);
                    }
                }
                // Choosing NOT to remove the script to prevent reload/caching issues in strict mode
                // document.body.removeChild(script); 
            };
        }
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

export default GlobeBackground;
