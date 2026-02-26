import React from 'react';
import DigitalInfrastructure from '../../components/DigitalInfrastructure/DigitalInfrastructure';
import Services from '../../components/Services';
import AboutUs from '../../components/AboutUs';
import WhyChooseUs from '../../components/WhyChooseUs';
import { motion } from 'framer-motion';

const Homepage = () => {
    return (
        <>
            {/* 1. Hero: Grid Intelligence */}
            <div id="home">
                <DigitalInfrastructure />
            </div>

            {/* 2. About Preview (Short Intro) */}
            <div id="about-preview">
                <AboutUs />
            </div>

            {/* 3. Core Services Preview (Brief) */}
            <div id="services-preview">
                <Services />
            </div>

            {/* 4. Why Choose Us */}
            <div id="why-choose-us">
                <WhyChooseUs />
            </div>

            {/* 5. Call to Action */}
            <section style={{
                padding: "100px 5%",
                textAlign: "center",
                background: "rgba(11, 18, 32, 0.4)", // Translucent to show animated background
                color: "white"
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>Ready to Transform Your <span style={{ color: "var(--primary-energy)" }}>Infrastructure?</span></h2>
                    <p style={{ fontSize: "1.2rem", opacity: 0.8, marginBottom: "40px", maxWidth: "800px", margin: "0 auto 40px" }}>
                        Join hundreds of enterprises that trust Monk Networks for their mission-critical digital systems.
                    </p>
                    <button style={{
                        padding: "15px 40px",
                        background: "var(--primary-energy)",
                        color: "white",
                        border: "none",
                        borderRadius: "50px",
                        fontSize: "1.1rem",
                        fontWeight: "bold",
                        cursor: "pointer",
                        boxShadow: "0 10px 20px rgba(240, 90, 40, 0.3)"
                    }}>
                        Get Started Now
                    </button>
                </motion.div>
            </section>
        </>
    );
};

export default Homepage;


