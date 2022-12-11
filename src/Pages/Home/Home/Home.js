import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Nav from '../Nav/Nav';
import Project from '../Project/Project';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Project></Project>
            <Contact></Contact>
        </div>
    );
};

export default Home;