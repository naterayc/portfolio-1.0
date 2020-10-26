import React from 'react';
import './about.css';
import photoAbout from '../../img/photo2.png';
import { Icon } from '@iconify/react';
import githubIcon from '@iconify/icons-mdi/github';
import emailIcon from '@iconify/icons-mdi/email';
import linkedinIcon from '@iconify/icons-mdi/linkedin';
import SoftSkills from './SoftSkills';
import TechSkills from './TechSkills';

const About = () => {
    return (
        <div className='about-container'>
            <h3>Sobre mí</h3>
            <div className='about'>
                <div className='photo-contact'>
                    <img src={photoAbout} alt="foto" />
                    <div>
                        <Icon icon={githubIcon} />
                        <Icon icon={emailIcon} />
                        <Icon icon={linkedinIcon} />
                    </div>
                </div>
                <div className="about-info">
                    <p>Mi enfoque como desarrolladora, se dirije hacia la creación de soluciones que permanezcan vigentes en el tiempo, sean innovadoras y eficientes.</p>
                    <p>Soy de rápido aprendizaje, por lo que constantemente adquiero nuevos conocimientos a fin de generar resultados de calidad y que se ajusten a las necesidades del cliente.</p>
                    <SoftSkills />
                    <TechSkills />
                </div>
            </div>
        </div>
    );
}

export default About;