import React, { Fragment } from 'react';
import About from './about/About';
import Contact from './contact/Contact';
import Footer from './footer/Footer';
import Header from './header/Header';
import Projects from './projects/Projects';
import { Element } from 'react-scroll';

const View = () => {

    return (
        <Fragment>
            <Header />
            <Element name="projects">
                <Projects />
            </Element>
            <Element name="about">
                <About />
            </Element>
            <Element name="contact">
                <Contact />
            </Element>
            <Footer />
        </Fragment>
    )
}

export default View;