import React, {useRef, Fragment} from 'react';
import './header.css';
import img1 from '../../img/photo1-mobile.png';
import img2 from '../../img/photo1-desktop.png';
import { Icon } from '@iconify/react';
import menuIcon from '@iconify/icons-feather/menu';
import xIcon from '@iconify/icons-feather/x';
import { Link } from 'react-scroll';


const Header = (props) => {
    const asideMenu = useRef(null);

    const openAside = () => {
        asideMenu.current.classList.add('active');
    }

    const closeAside = () => {
        asideMenu.current.classList.remove('active');
    }

    return (
        <Fragment>
        <header>
            <div className='top-bar'>
                <Icon icon={menuIcon} onClick={openAside}/>
                <h1> &#60; Naterayc <span>&#47;&#62;</span></h1>
                <nav>
                    <ul>
                        <li><Link to="projects" smooth={true} >Proyectos</Link></li>
                        <li><Link to="about" smooth={true} >Sobre mí</Link></li>
                        <li><Link to="contact" smooth={true} >Contacto</Link></li>
                    </ul>
                </nav>
            </div>
            <div className='info-container'>
                <div className="info">
                    <h2>¡Hola, soy Yndira Natera!</h2>
                    <h3>Desarrolladora Front-end</h3>
                    <h3>e Ingeniero electricista.</h3>
                    <Link to="projects" smooth={true} ><button type='button'>Proyectos</button></Link>
                </div>
                <picture>
                    <source srcSet={img2} media='(min-width:600px)' />
                    <img src={img1} alt='foto1' />
                </picture>
            </div>
        </header>
        <div className="aside" ref={asideMenu}>
        <Icon icon={xIcon} onClick={closeAside} />
        <ul>
            <li><Link to="projects" smooth={true} onClick={closeAside}>Proyectos</Link></li>
            <li><Link to="about" smooth={true} onClick={closeAside}>Sobre mí</Link></li>
            <li><Link to="contact" smooth={true} onClick={closeAside}>Contacto</Link></li>
        </ul>
    </div>
    </Fragment>
    );
}

export default Header;