import React from 'react';
import Navbar from '../../components/Navbar';
import DigitalInfrastructure from '../../components/DigitalInfrastructure/DigitalInfrastructure';
import Services from '../../components/Services';
import CoreExpertise from '../../components/CoreExpertise';
import TechMatrix from '../../components/TechMatrix';
import ITSupportAccordion from '../../components/ITSupportAccordion';
import GlobalOffices from '../../components/GlobalOffices';
import Careers from '../../components/Careers';
import Footer from '../../components/Footer';
import ScrollLayout from '../../components/layout/ScrollLayout';
import Solutions from '../../components/Solutions'; // Keeping Solutions as backup or repurposed if needed, but removing from main flow if redundant with Services

const Homepage = () => {
    return (
        <div style={{ position: 'relative', width: '100%', overflowX: 'hidden' }}>
            <Navbar />

            <ScrollLayout>
                {/* 1. Hero: Grid Intelligence */}
                <div id="home">
                    <DigitalInfrastructure />
                </div>

                {/* 2. Services Grid */}
                <div id="services">
                    <Services />
                </div>

                {/* 3. Core Expertise (Timeline) */}
                <div id="expertise">
                    <CoreExpertise />
                </div>

                {/* 4. Tech Proficiencies (Matrix) */}
                <div id="tech-stack">
                    <TechMatrix />
                </div>

                {/* 5. IT Support (Accordion) */}
                <div id="support">
                    <ITSupportAccordion />
                </div>

                {/* 6. Global Offices */}
                <div id="contact">
                    <GlobalOffices />
                </div>

                {/* 7. Careers */}
                <div id="careers">
                    <Careers />
                </div>

                {/* Footer */}
                <Footer />
            </ScrollLayout>
        </div>
    );
};

export default Homepage;
