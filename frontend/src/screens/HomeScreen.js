import React from 'react';
import Profile from '../components/Profile';
import About from '../components/About';
import Contact from '../components/Contact';
import Projects from '../components/Projects';

const HomeScreen = () => {
    return (
        <div>
            <Profile />
            <hr className='my-5'></hr>
            <section id='about'>
                <About />
            </section>
            <hr className='my-5'></hr>
            <section id='projects'>
            <Projects />
            </section>
            <hr className='my-5'></hr>
            <section id='resume'>
                <Contact />
            </section>
        </div>
    )
};

export default HomeScreen;