import React from 'react';
import Navbar from '../../components/Navbar';
import DigitalInfrastructure from '../../components/DigitalInfrastructure/DigitalInfrastructure';
import Solutions from '../../components/Solutions';
import Services from '../../components/Services';
import AboutUs from '../../components/AboutUs';
import GlobalOffices from '../../components/GlobalOffices';
import Careers from '../../components/Careers';
import Footer from '../../components/Footer'; // Ensure Footer exists
import ScrollLayout from '../../components/layout/ScrollLayout';

const Homepage = () => {
    return (
        <div style={{ position: 'relative', width: '100%', overflowX: 'hidden' }}>
            <Navbar />

            <ScrollLayout>
                {/* Section 1: Hero */}
                <div id="hero">
                    <DigitalInfrastructure />
                </div>

                {/* Section 2: Solutions */}
                <Solutions />

                {/* Section 3: Services */}
                <div id="services">
                    <Services />
                </div>

                {/* Section 4: About Us */}
                <AboutUs />

                {/* Section 5: Global Offices (Can serve as part of About/Contact/Trust) */}
                <div id="global-offices">
                    <GlobalOffices />
                </div>

                {/* Section 6: Careers */}
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
