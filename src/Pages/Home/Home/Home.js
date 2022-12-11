import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Nav from '../Nav/Nav';
import Project from '../Project/Project';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
            <Nav></Nav>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Project></Project>
        </div>
    );
};

export default Home;