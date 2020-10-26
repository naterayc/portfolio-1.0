import React, { Fragment } from 'react';
import About from './about/About';
import Contact from './contact/Contact';
import Footer from './footer/Footer';
import Header from './header/Header';
import Projects from './projects/Projects';

const View = () => {
    return (
        <Fragment>
            <Header />
            <Projects />
            <About />
            <Contact />
            <Footer />
        </Fragment>
    )
}

export default View;