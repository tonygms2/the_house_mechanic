import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Contact from '../pages/Contact'
import Gallery from '../components/Gallery';

const Home = () => {
    return (
        <>
            <Hero />
            <Gallery />
            <Services /> 
            <Contact/>
        </>

    )
}

export default Home;

