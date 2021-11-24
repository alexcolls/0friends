import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { About, Rarities, Gamearn, Roadmap } from '../components/InfoSection/Data';
import SecNewListed from '../components/SecNewListed';
import Footer from '../components/Footer';

const Home = () => {

    const [ isOpen, setIsOpen ] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...About} />
            <InfoSection {...Rarities} />
            <InfoSection {...Gamearn} />
            <InfoSection {...Roadmap} />
            <Footer />
        </>
    )
}

export default Home;
