import React from 'react';
import './header.css';
import img1 from '../../img/photo1-mobile.png';
import img2 from '../../img/photo1-desktop.png'

const Header = () => {
    return (
        <header>
            <div className='top-bar'>
                <h1> &#60; Naterayc <span>&#47;&#62;</span></h1>
                <nav>
                    <ul>
                        <li>Proyectos</li>
                        <li>Sobre mí</li>
                        <li>Contacto</li>
                    </ul>
                </nav>
            </div>
            <div className='info-container'>
                <div className="info">
                    <h2>¡Hola, soy Yndira Natera!</h2>
                    <h3>Desarrolladora Front-end</h3>
                    <h3>e Ingeniero electricista.</h3>
                    <button type='button'>Proyectos</button>
                </div>
                <picture>
                    <source srcSet={img2} media='(min-width:600px)'/>
                    <img src={img1} alt='foto1' />
                </picture>
            </div>
        </header>
    );
}

export default Header;