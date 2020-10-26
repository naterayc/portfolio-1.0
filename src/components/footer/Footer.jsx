import React from 'react';
import './footer.css';

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <footer>
            <div>
                <p>Desarrollado por &#60; Naterayc &#47;&#62;</p>
                <p>{year}</p>
            </div>
        </footer>
    );
}

export default Footer;