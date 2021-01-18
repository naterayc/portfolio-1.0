import React, { useState } from 'react';
import './projects.css';
import cptPreview from '../../img/cpt-preview.png';
import bqPreview from '../../img/bq-preview.png';
import nomadaPreview from '../../img/nomada-preview.png';
import coverCPT from '../../img/cover-cpt.png';
import coverBQ from '../../img/cover-bq.png';
import coverNomada from '../../img/cover-nomada.png';
import coverMdLinks from '../../img/cover-md-links.png';
import mdLinksPreview from '../../img/md-links-preview.png';
import ModalCPT from './ModalCPT';

const Projects = () => {

    const [showModal, setShowModal] = useState(false);
    const [imgModal, setImgModal] = useState(undefined);
    const [titleModal, setTitleModal] = useState(undefined);
    const [projectInfo, setProjectInfo] = useState(undefined);
    const [usedTecnologies, setUsedTecnologies] = useState(undefined);
    const [linkToDemo, setLinkToDemo] = useState(undefined);
    const [linkToCode, setLinkToCode] = useState(undefined);

    const closeModal = (e) => {

        const target = e.target.tagName;
        const targetClass = e.target.className;

        if(target === 'svg' || target === 'path'){
            setShowModal(false);
        }

        if (targetClass === 'modal-container'){
            setShowModal(false); 
        }
    };

    const openModal = (e) => {
        if (e.target.alt === 'Comida para todos'){
            setTitleModal('Proyecto Comida para todos');
            setImgModal(coverCPT);
            setProjectInfo('Rediseño del sitio web de la organización social Comida para todos. Realizado en conjunto con un equipo UX designer. Desarrollado con');
            setUsedTecnologies('React, Javascript y CSS');
            setLinkToDemo('https://comida-para-todos.netlify.app/');
            setLinkToCode('https://github.com/naterayc/Comida-para-todos/tree/master');
        }

        if(e.target.alt === 'Burger Queen'){
            setTitleModal('Proyecto Burger Queen');
            setImgModal(coverBQ);
            setProjectInfo('Desarrollo de software gastronómico para restaurante de hamburgesas. Realizado en su totalidad por un equipo Front-end. Desarrollado con');
            setUsedTecnologies('React, Firebase, Javascript y CSS');
            setLinkToDemo('https://burguer-queen.netlify.app/');
            setLinkToCode('https://github.com/naterayc/burger-queen');
        }

        if(e.target.alt === 'Nómada'){
            setTitleModal('Proyecto Red social');
            setImgModal(coverNomada);
            setProjectInfo('Nómada, una red social para viajeros. Realizado en su totalidad por un equipo Front-end. Desarrollado con');
            setUsedTecnologies('Firebase, Javascript y CSS');
            setLinkToDemo('https://naterayc.github.io/SCL014-social-network/');
            setLinkToCode('https://github.com/naterayc/SCL014-social-network');
        }

        if(e.target.alt === 'Md-links'){
            setTitleModal('Markdown Links');
            setImgModal(coverMdLinks);
            setProjectInfo('Md-links, es una librería que se encanrga de leer archivos .md, encontrar los links existentes, contabilizarlos y verificar su estado. Desarrollada con');
            setUsedTecnologies('Node.js, Javascript');
            setLinkToDemo('https://www.npmjs.com/package/naterayc-md-links');
            setLinkToCode('https://github.com/naterayc/SCL014-md-links');
        }
        
        setShowModal(true);
    };

    return (
        <div className="projects-section">
            <h3>Proyectos</h3>
            <div className="projects-container">
                <div onClick={openModal} >
                    <picture>
                        <source srcSet={cptPreview}  />
                        <img source={cptPreview} alt="Comida para todos" />
                    </picture>
                </div>
                <div onClick={openModal} >
                    <picture>
                        <source srcSet={bqPreview}  />
                        <img source={bqPreview} alt="Burger Queen" />
                    </picture>
                </div>
                <div onClick={openModal}>
                    <picture>
                        <source srcSet={nomadaPreview} />
                        <img source={nomadaPreview} alt="Nómada" />
                    </picture>
                </div>
                <div onClick={openModal}>
                    <picture>
                        <source srcSet={mdLinksPreview} />
                        <img source={mdLinksPreview} alt="Md-links" />
                    </picture>
                </div>
            </div>
            {showModal === false ? null : 
                <ModalCPT close={closeModal} 
                    img={imgModal} 
                    title={titleModal} 
                    info={projectInfo}
                    tecnologies={usedTecnologies}
                    demo={linkToDemo}
                    code={linkToCode}/>}
        </div>
    );
}

export default Projects;