import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaCode, FaMobileAlt, FaCloud, FaShoppingCart,
    FaLightbulb, FaDraftingCompass, FaCogs, FaRocket,
    FaReact, FaNodeJs, FaAws, FaDocker, FaDatabase, FaBolt
} from 'react-icons/fa';
import { SiVercel, SiNextdotjs, SiTailwindcss, SiPostgresql } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';
import useMobile from '../../hooks/useMobile';

const DigitalSolutionsPage = () => {
    const isMobile = useMobile();
    const navigate = useNavigate();
    return (
        <div style={{ background: '#030305', color: 'white', minHeight: '100vh', paddingBottom: '100px' }}>

            {/* 1. HERO SECTION */}
            <section style={{
                height: isMobile ? '60vh' : '80vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '0 20px',
                background: 'radial-gradient(circle at 50% 50%, rgba(0, 242, 234, 0.05) 0%, transparent 70%)'
            }}>
                <motion.h5
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ color: '#00f2ea', letterSpacing: '10px', textTransform: 'uppercase', marginBottom: '20px', fontSize: '1rem' }}
                >
                    Engineering Excellence
                </motion.h5>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: '900', letterSpacing: '-2px', lineHeight: 1, marginBottom: '30px' }}
                >
                    DIGITAL <span style={{ color: '#f05a28' }}>SOLUTIONS</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.6)', maxWidth: '800px', lineHeight: 1.6 }}
                >
                    We build high-performance, future-ready digital ecosystems that drive growth and redefine industries.
                    From custom web engineering to global cloud infrastructure, we deliver precision at every scale.
                </motion.p>
            </section>

            {/* 2. PERSPECTIVE SPLIT SHOWCASE (Capabilities Re-imagined) */}
            <section style={{ maxWidth: '1400px', margin: '0 auto', padding: '100px 20px' }}>
                <div style={{ textAlign: 'center', marginBottom: isMobile ? '40px' : '80px' }}>
                    <h2 style={{ fontSize: isMobile ? '2.5rem' : '3.5rem', fontWeight: '900', marginBottom: '20px', letterSpacing: '-2px' }}>Our Capabilities</h2>
                    <div style={{ height: '4px', width: '80px', background: '#00f2ea', margin: '0 auto' }} />
                </div>

                <CapabilitiesShowcase isMobile={isMobile} />
            </section>

            {/* 3. THE FABRICATION PROCESS */}
            <section style={{ background: 'rgba(255,255,255,0.01)', padding: '120px 20px' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '100px' }}>
                        <h2 style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '20px' }}>Fabrication Process</h2>
                        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.2rem' }}>How we turn vision into technical reality.</p>
                    </div>

                    <KineticPipeline isMobile={isMobile} />
                </div>
            </section>

            {/* 4. TECH STACK SECTION */}
            <section style={{ maxWidth: '1400px', margin: '0 auto', padding: '120px 20px', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '60px' }}>Our Technical Core</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '50px', opacity: 0.6 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                        <FaReact size={50} color="#61DBFB" /> <span>React</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                        <SiNextdotjs size={50} color="white" /> <span>Next.js</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                        <FaNodeJs size={50} color="#68A063" /> <span>Node.js</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                        <FaAws size={50} color="#FF9900" /> <span>AWS</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                        <SiPostgresql size={50} color="#336791" /> <span>PostgreSQL</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                        <FaDocker size={50} color="#2496ED" /> <span>Docker</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                        <SiTailwindcss size={50} color="#38B2AC" /> <span>Tailwind</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                        <SiVercel size={50} color="white" /> <span>Vercel</span>
                    </div>
                </div>
            </section>

            {/* 5. CTA SECTION */}
            <section style={{ textAlign: 'center', padding: isMobile ? '80px 20px' : '150px 20px', background: 'linear-gradient(to bottom, #030305, #050510)' }}>
                <h2 style={{ fontSize: isMobile ? '2rem' : '3.5rem', fontWeight: '900', marginBottom: '30px' }}>Ready to Synthesize Your Vision?</h2>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.4rem', maxWidth: '700px', margin: '0 auto 50px' }}>
                    Let's discuss how our technical expertise can drive your next digital transformation.
                </p>
                <motion.button
                    onClick={() => navigate('/monknetworks/contact')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                        padding: '18px 50px',
                        background: '#00f2ea',
                        color: '#030305',
                        border: 'none',
                        borderRadius: '100px',
                        fontSize: '1.2rem',
                        fontWeight: '900',
                        cursor: 'pointer',
                        boxShadow: '0 0 30px rgba(0, 242, 234, 0.4)'
                    }}
                >
                    Start a Project
                </motion.button>
            </section>

        </div>
    );
};


/**
 * PERSPECTIVE SPLIT SHOWCASE component
 */
const CapabilitiesShowcase = ({ isMobile }) => {
    const [activeIdx, setActiveIdx] = useState(0);

    const capabilities = [
        {
            icon: <FaCode />,
            title: "Web Engineering",
            head: "Architectural Precision",
            desc: "We build zero-jitter, high-performance web ecosystems using React, Next.js, and advanced state management. Our architectures are engineered for sub-second hydration and perfect fluid navigation.",
            color: "#00f2ea",
            index: "01"
        },
        {
            icon: <FaMobileAlt />,
            title: "Mobile Synthesis",
            head: "Kinetic Engagement",
            desc: "Custom-developed native and cross-platform mobile solutions. We synthesize high-performance app cores with ultra-responsive gestures to ensure elite engagement metrics.",
            color: "#f05a28",
            index: "02"
        },
        {
            icon: <FaCloud />,
            title: "Cloud Infrastructure",
            head: "Global Resilience",
            desc: "Hardened, scalable infrastructure deployed at the global edge. We leverage AWS, Vercel, and Cloudflare to ensure 99.999% uptime and instant asset dispatch world-wide.",
            color: "#ff00ff",
            index: "03"
        },
        {
            icon: <FaShoppingCart />,
            title: "E-Commerce Engines",
            head: "Revenue Optimization",
            desc: "Next-gen commerce platforms optimized for high-volume traffic. Every line of code is written to enhance conversion DNA and streamline the transactional journey.",
            color: "#39ff14",
            index: "04"
        }
    ];

    const current = capabilities[activeIdx];

    return (
        <div style={{
            display: 'flex',
            gap: isMobile ? '30px' : '40px',
            alignItems: 'center',
            flexDirection: isMobile ? 'column' : 'row'
        }}>
            {/* SELECTION LIST (LEFT) - COMPACTED */}
            <div style={{ flex: isMobile ? '1' : '0 0 420px', width: isMobile ? '100%' : 'auto', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {capabilities.map((item, i) => (
                    <motion.div
                        key={i}
                        onMouseEnter={() => setActiveIdx(i)}
                        onClick={() => setActiveIdx(i)}
                        style={{
                            padding: '25px 40px',
                            background: activeIdx === i ? 'rgba(255,255,255,0.04)' : 'transparent',
                            border: `1px solid ${activeIdx === i ? item.color + '44' : 'rgba(255,255,255,0.05)'}`,
                            borderRadius: '20px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '30px',
                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        {/* Status Indicator */}
                        {activeIdx === i && (
                            <motion.div
                                layoutId="active-indicator"
                                style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', background: item.color }}
                            />
                        )}

                        <span style={{
                            fontSize: '1rem',
                            fontWeight: '900',
                            color: activeIdx === i ? item.color : 'rgba(255,255,255,0.2)',
                            fontFamily: 'monospace',
                            letterSpacing: '4px'
                        }}>
                            {item.index}
                        </span>

                        <span style={{
                            fontSize: isMobile ? '1.2rem' : '1.6rem',
                            fontWeight: '800',
                            color: activeIdx === i ? 'white' : 'rgba(255,255,255,0.3)',
                            letterSpacing: '-0.5px'
                        }}>
                            {item.title}
                        </span>
                    </motion.div>
                ))}
            </div>

            {/* DYNAMIC VISUAL HUB (RIGHT) - SCALED DOWN */}
            <div style={{ flex: 1, position: 'relative' }}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIdx}
                        initial={{ opacity: 0, scale: 0.98, x: 30 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.98, x: -30 }}
                        transition={{ duration: 0.4, ease: "circOut" }}
                        style={{
                            width: '100%',
                            minHeight: isMobile ? 'auto' : '440px',
                            background: `radial-gradient(circle at 100% 0%, ${current.color}12 0%, rgba(3,3,5,1) 85%)`,
                            border: `1px solid ${current.color}15`,
                            borderRadius: '32px',
                            padding: isMobile ? '40px 30px' : '50px 60px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            overflow: 'hidden'
                        }}
                    >
                        {/* Decorative Background Icon */}
                        <div style={{
                            position: 'absolute',
                            right: '-5%',
                            top: '-5%',
                            fontSize: '22rem',
                            color: current.color,
                            opacity: 0.02,
                            pointerEvents: 'none'
                        }}>
                            {current.icon}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15 }}
                            style={{ fontSize: '2.8rem', color: current.color, marginBottom: '30px' }}
                        >
                            {current.icon}
                        </motion.div>

                        <motion.h4
                            initial={{ opacity: 0, x: 15 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            style={{
                                fontSize: '0.9rem',
                                fontWeight: '900',
                                color: 'rgba(255,255,255,0.3)',
                                letterSpacing: '8px',
                                textTransform: 'uppercase',
                                marginBottom: '15px'
                            }}
                        >
                            {current.head}
                        </motion.h4>

                        <motion.h3
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.25 }}
                            style={{ fontSize: isMobile ? '2rem' : '3rem', fontWeight: '999', lineHeight: 1.1, marginBottom: '25px', letterSpacing: '-1.5px' }}
                        >
                            {current.title.toUpperCase()}
                        </motion.h3>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            style={{
                                fontSize: '1.2rem',
                                color: 'rgba(255,255,255,0.4)',
                                lineHeight: 1.6,
                                maxWidth: '650px',
                                fontWeight: '300'
                            }}
                        >
                            {current.desc}
                        </motion.p>

                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '100px' }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            style={{ height: '6px', background: current.color, marginTop: '40px', borderRadius: '10px', boxShadow: `0 0 20px ${current.color}66` }}
                        />
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

/**
 * KINETIC TECHNICAL PIPELINE component
 */
const KineticPipeline = ({ isMobile }) => {
    const steps = [
        { num: "01", icon: <FaLightbulb />, title: "Strategy", desc: "Extracting business logic and defining the strategic architectural blueprint." },
        { num: "02", icon: <FaDraftingCompass />, title: "Design", desc: "Kinetic UI/UX fabrication focused on performance and aesthetic excellence." },
        { num: "03", icon: <FaCogs />, title: "Build", desc: "Synthesis of high-throughput logic cores and data-stream pipelines." },
        { num: "04", icon: <FaRocket />, title: "Deploy", desc: "Global distribution across edge networks for instant sub-second delivery." }
    ];

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? '40px' : '60px',
            position: 'relative',
            padding: '40px 0'
        }}>
            {/* CONNECTOR LINE (Desktop only) */}
            <div style={{
                position: 'absolute',
                top: '100px',
                left: '10%',
                right: '10%',
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(0, 242, 234, 0.4) 50%, transparent)',
                zIndex: 0,
                display: isMobile ? 'none' : 'block'
            }} />

            {steps.map((step, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2, duration: 0.8 }}
                    style={{
                        flex: 1,
                        position: 'relative',
                        zIndex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center'
                    }}
                >
                    {/* Technical Module Node */}
                    <div style={{
                        width: '120px',
                        height: '120px',
                        background: 'rgba(255,255,255,0.02)',
                        border: '1px solid rgba(0, 242, 234, 0.2)',
                        borderRadius: '30px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '40px',
                        position: 'relative',
                        backdropFilter: 'blur(10px)',
                        transform: 'rotate(45deg)',
                        transition: 'all 0.3s ease'
                    }}>
                        <div style={{ transform: 'rotate(-45deg)', fontSize: '2.5rem', color: '#00f2ea' }}>
                            {step.icon}
                        </div>

                        {/* Step Index Hub */}
                        <div style={{
                            position: 'absolute',
                            top: '-15px',
                            right: '-15px',
                            fontSize: '0.9rem',
                            fontWeight: '900',
                            background: '#00f2ea',
                            color: '#030305',
                            padding: '6px 12px',
                            borderRadius: '8px',
                            boxShadow: '0 5px 15px rgba(0, 242, 234, 0.3)',
                            transform: 'rotate(-45deg)',
                            fontFamily: 'monospace'
                        }}>
                            {step.num}
                        </div>
                    </div>

                    <h4 style={{ fontSize: '1.8rem', fontWeight: '900', marginBottom: '20px', letterSpacing: '-1px' }}>{step.title}</h4>
                    <p style={{
                        color: 'rgba(255,255,255,0.4)',
                        lineHeight: 1.7,
                        fontSize: '1.1rem',
                        maxWidth: '280px',
                        fontWeight: '300'
                    }}>
                        {step.desc}
                    </p>
                </motion.div>
            ))}
        </div>
    );
};

export default DigitalSolutionsPage;
