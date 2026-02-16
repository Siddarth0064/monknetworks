import React from 'react';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import Services from '../../components/Services';
import WhyChooseUs from '../../components/WhyChooseUs';
import GlobalOffices from '../../components/GlobalOffices';
import Careers from '../../components/Careers';
import Footer from '../../components/Footer';

import NewHero from '../../components/ThreeDHero/NewHero';

import DigitalInfrastructure from '../../components/DigitalInfrastructure/DigitalInfrastructure';

const Homepage = () => {
    return (
        <div style={{ position: 'relative', width: '100%', overflowX: 'hidden' }}>
            <Navbar />
            {/* <Hero /> */}
            {/* <NewHero /> */}
            {/* <DigitalAwakening /> */}
            {/* <DigitalTakeover /> */}
            <DigitalInfrastructure />
            <Services />
            {/* <WhyChooseUs /> */}
            <GlobalOffices />
            {/* <Careers />
            <Footer /> */}
        </div>
    );
};

export default Homepage;
