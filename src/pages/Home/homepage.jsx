import React from 'react';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import Services from '../../components/Services';
import WhyChooseUs from '../../components/WhyChooseUs';
import GlobalOffices from '../../components/GlobalOffices';
import Careers from '../../components/Careers';
import Footer from '../../components/Footer';

import NewHero from '../../components/ThreeDHero/NewHero';

import DigitalAwakening from '../../components/DigitalAwakening/DigitalAwakening';

const Homepage = () => {
    return (
        <div style={{ position: 'relative', width: '100%', overflowX: 'hidden' }}>
            <Navbar />
            {/* <Hero /> */}
            {/* <NewHero /> */}
            <DigitalAwakening />
            <Services />
            {/* <WhyChooseUs /> */}
            <GlobalOffices />
            {/* <Careers />
            <Footer /> */}
        </div>
    );
};

export default Homepage;
