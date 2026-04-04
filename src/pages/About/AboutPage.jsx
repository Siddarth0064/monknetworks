import CoreExpertise from '../../components/CoreExpertise';
import { motion } from 'framer-motion';
import { FaEye, FaRocket, FaHistory, FaUsers } from 'react-icons/fa';
import useMobile from '../../hooks/useMobile';
import monkLogo from '../../assets/monk-logo-bg.png';

const AboutPage = () => {
    const isMobile = useMobile();
    return (
        <div style={{ position: 'relative', width: '100%', minHeight: '100vh', background: 'transparent' }}>

            {/* 1. KINETIC ARRIVAL HERO */}
            <section style={{
                height: isMobile ? '60vh' : '80vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '0 5%',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    style={{
                        position: 'absolute',
                        width: isMobile ? '300px' : '600px',
                        height: isMobile ? '300px' : '600px',
                        background: 'radial-gradient(circle, rgba(0, 242, 234, 0.03) 0%, transparent 70%)',
                        zIndex: 0
                    }}
                />

                <div style={{ zIndex: 1 }}>
                    <motion.h5
                        initial={{ opacity: 0, letterSpacing: "20px" }}
                        animate={{ opacity: 1, letterSpacing: "10px" }}
                        transition={{ duration: 1 }}
                        style={{ color: "var(--primary-energy)", textTransform: "uppercase", fontSize: isMobile ? "0.75rem" : "0.9rem", marginBottom: "30px", fontWeight: "900", letterSpacing: isMobile ? "5px" : "10px" }}
                    >
                        The Architecture of Purpose
                    </motion.h5>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ fontSize: "clamp(3rem, 10vw, 7rem)", color: "white", fontWeight: "999", lineHeight: 0.9, letterSpacing: "-5px", marginBottom: "30px" }}
                    >
                        OUR <span style={{ color: "transparent", WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}>STORY</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        style={{ fontSize: isMobile ? "1.1rem" : "1.4rem", color: "rgba(255,255,255,0.5)", maxWidth: "700px", margin: "0 auto", lineHeight: 1.6, fontWeight: "300" }}
                    >
                        We don't just build systems; we engineer the digital fabric of tomorrow with precision, resilience, and unyielding purpose.
                    </motion.p>
                </div>
            </section>

            {/* 2. SPECTRAL NARRATIVE (Vision & Mission) */}
            <section style={{ padding: isMobile ? "60px 5%" : "100px 5%", maxWidth: "1400px", margin: "0 auto" }}>
                {/* Vision Panoramic */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: isMobile ? '40px' : '80px',
                    marginBottom: isMobile ? '60px' : '150px',
                    flexDirection: isMobile ? 'column' : 'row'
                }}>
                    <div style={{ flex: 1, width: '100%' }}>
                        <SpectralIris isMobile={isMobile} />
                    </div>
                    <div style={{ flex: 1, textAlign: isMobile ? 'center' : 'left' }}>
                        <motion.h4
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            style={{ color: "var(--primary-energy)", letterSpacing: "5px", textTransform: "uppercase", marginBottom: "20px", fontWeight: "900" }}
                        >
                            Our Vision
                        </motion.h4>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            style={{ fontSize: isMobile ? "2.2rem" : "3.5rem", fontWeight: "900", color: "white", marginBottom: "30px", letterSpacing: isMobile ? "0px" : "-2px" }}
                        >
                            The Global Benchmark for <span style={{ color: "var(--primary-energy)" }}>Fluid Tech</span>.
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            style={{ fontSize: "1.2rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.8, fontWeight: "300" }}
                        >
                            To be the global benchmark for resilient digital ecosystems, where technology flows as naturally as breath, empowering humanity to reach its highest potential without friction.
                        </motion.p>
                    </div>
                </div>

                {/* Mission Panoramic */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: isMobile ? '40px' : '80px',
                    flexDirection: isMobile ? 'column' : 'row-reverse'
                }}>
                    <div style={{ flex: 1, width: '100%' }}>
                        <MissionCore isMobile={isMobile} />
                    </div>
                    <div style={{ flex: 1, textAlign: isMobile ? 'center' : 'right' }}>
                        <motion.h4
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            style={{ color: "#00f2ea", letterSpacing: "5px", textTransform: "uppercase", marginBottom: "20px", fontWeight: "900" }}
                        >
                            Our Mission
                        </motion.h4>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            style={{ fontSize: isMobile ? "2.2rem" : "3.5rem", fontWeight: "900", color: "white", marginBottom: "30px", letterSpacing: isMobile ? "0px" : "-2px" }}
                        >
                            Engineering <span style={{ color: "#00f2ea" }}>Absolute Stability</span>.
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            style={{ fontSize: "1.2rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.8, fontWeight: "300" }}
                        >
                            To engineer, deploy, and maintain mission-critical infrastructure that guarantees stability, security, and scalability for enterprises navigating the digital frontier.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Company Story / Leadership */}
            <section style={{ padding: isMobile ? "50px 5%" : "80px 5%", background: "rgba(0,0,0,0.2)" }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: isMobile ? "column" : "row", gap: isMobile ? "40px" : "80px", alignItems: "center" }}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    >
                        <h2 style={{ fontSize: "2.5rem", color: "white", marginBottom: "30px" }}>
                            The <span style={{ color: "var(--primary-energy)" }}>Monk</span> Philosophy
                        </h2>
                        <p style={{ color: "rgba(255,255,255,0.8)", lineHeight: "1.8", marginBottom: "20px" }}>
                            Founded on the principle of "Quiet Power," Monk Networks was born from the realization that the best technology is that which you never have to worry about.
                        </p>
                        <p style={{ color: "rgba(255,255,255,0.8)", lineHeight: "1.8" }}>
                            Our leadership brings together decades of experience in high-availability systems, network security, and enterprise data management. We don't just build networks; we build trust.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        style={{
                            height: isMobile ? "300px" : "400px",
                            width: "100%",
                            background: "linear-gradient(45deg, rgba(240, 90, 40, 0.1), rgba(0, 242, 234, 0.1))",
                            borderRadius: "30px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            border: "1px solid rgba(255,255,255,0.1)"
                        }}
                    >
                        <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", padding: "0 20px", position: "relative", zIndex: 10 }}>
                            <img src={monkLogo} alt="Monk Networks Logo" style={{ width: "160px", marginBottom: "25px", filter: "drop-shadow(0 0 20px rgba(0, 242, 234, 0.4))" }} />

                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: {
                                        opacity: 1,
                                        transition: { staggerChildren: 0.3 }
                                    }
                                }}
                            >
                                <motion.h3
                                    variants={{
                                        hidden: { opacity: 0, y: 10, scale: 0.95 },
                                        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
                                    }}
                                    style={{ color: "white", fontSize: "1.8rem", fontWeight: "900", letterSpacing: "2px", marginBottom: "15px", textTransform: "uppercase" }}
                                >
                                    Absolute <span style={{ color: "var(--primary-energy)", textShadow: "0 0 15px var(--primary-energy)" }}>Trust.</span>
                                </motion.h3>

                                <motion.p
                                    variants={{
                                        hidden: { opacity: 0, filter: "blur(10px)" },
                                        visible: { opacity: 1, filter: "blur(0px)", transition: { duration: 1 } }
                                    }}
                                    style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.3rem", fontWeight: "300", letterSpacing: "1px", margin: "0 0 10px 0" }}
                                >
                                    Impenetrable. Unyielding.
                                </motion.p>

                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, scaleX: 0 },
                                        visible: { opacity: 1, scaleX: 1, transition: { duration: 0.8, delay: 0.5 } }
                                    }}
                                    style={{ width: "40px", height: "2px", background: "#00f2ea", margin: "15px auto", boxShadow: "0 0 10px #00f2ea" }}
                                />

                                <motion.p
                                    variants={{
                                        hidden: { opacity: 0, y: 10 },
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.8 } }
                                    }}
                                    style={{ color: "white", fontSize: "1.1rem", fontWeight: "700", letterSpacing: "3px", textTransform: "uppercase" }}
                                >
                                    Your Enterprise is Safe.
                                </motion.p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Expertise Timeline */}
            <div id="expertise">
                <div style={{ textAlign: "center", padding: isMobile ? "40px 0 0" : "80px 0 0" }}>
                    <h2 style={{ fontSize: isMobile ? "2.5rem" : "3rem", color: "white" }}>Core <span style={{ color: "var(--primary-energy)" }}>Expertise</span></h2>
                </div>
                <CoreExpertise />
            </div>
        </div>
    );
};

export default AboutPage;

/**
 * SPECTRAL IRIS - Technical Vision Visualization
 */
const SpectralIris = ({ isMobile }) => {
    return (
        <div style={{
            width: isMobile ? '300px' : '400px',
            height: isMobile ? '300px' : '400px',
            margin: '0 auto',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            {/* Outer Orbital Ring */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    border: '1px solid rgba(240, 90, 40, 0.2)',
                    borderRadius: '50%',
                    borderStyle: 'dashed'
                }}
            />

            {/* Multi-Blade Aperture Mechanics */}
            <div style={{ position: 'relative', width: isMobile ? '180px' : '250px', height: isMobile ? '180px' : '250px' }}>
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            rotate: i * 45,
                            scale: [1, 1.1, 1],
                            opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{ duration: 4, delay: i * 0.2, repeat: Infinity }}
                        style={{
                            position: 'absolute',
                            width: '100px',
                            height: '1px',
                            background: 'var(--primary-energy)',
                            top: '50%',
                            left: '50%',
                            transformOrigin: '0% 0%',
                            boxShadow: '0 0 20px var(--primary-energy)'
                        }}
                    />
                ))}
            </div>

            {/* Central Fiber-Optic Node */}
            <motion.div
                animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                    width: '60px',
                    height: '60px',
                    background: 'var(--primary-energy)',
                    borderRadius: '50%',
                    boxShadow: '0 0 50px var(--primary-energy)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <FaEye style={{ color: 'white', fontSize: '1.5rem' }} />
            </motion.div>

            {/* Technical Reticles */}
            <div style={{ position: 'absolute', top: '10%', left: '10%', width: '20px', height: '20px', borderTop: '2px solid white', borderLeft: '2px solid white', opacity: 0.3 }} />
            <div style={{ position: 'absolute', bottom: '10%', right: '10%', width: '20px', height: '20px', borderBottom: '2px solid white', borderRight: '2px solid white', opacity: 0.3 }} />
        </div>
    );
};

/**
 * MISSION CORE - Technical Mission Visualization
 */
const MissionCore = ({ isMobile }) => {
    return (
        <div style={{
            width: isMobile ? '300px' : '400px',
            height: isMobile ? '300px' : '400px',
            margin: '0 auto',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            {/* Energy Hub - Hexagonal Matrix */}
            <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{
                    width: isMobile ? '200px' : '280px',
                    height: isMobile ? '200px' : '280px',
                    background: 'rgba(0, 242, 234, 0.03)',
                    border: '1px solid rgba(0, 242, 234, 0.2)',
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                {/* Internal Pulsing Core */}
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    style={{
                        width: isMobile ? '120px' : '180px',
                        height: isMobile ? '120px' : '180px',
                        border: '2px solid #00f2ea',
                        borderRadius: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: 'inset 0 0 30px #00f2ea33'
                    }}
                >
                    <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <FaRocket style={{ color: '#00f2ea', fontSize: '3rem', filter: 'drop-shadow(0 0 10px #00f2ea)' }} />
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Satellite Data Nodes */}
            {[...Array(4)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        translateY: [0, -20, 0],
                        opacity: [0.2, 0.8, 0.2]
                    }}
                    transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
                    style={{
                        position: 'absolute',
                        width: '8px',
                        height: '8px',
                        background: '#00f2ea',
                        borderRadius: '50%',
                        top: i % 2 === 0 ? '15%' : '80%',
                        left: i < 2 ? '15%' : '80%',
                        boxShadow: '0 0 15px #00f2ea'
                    }}
                />
            ))}
        </div>
    );
};
