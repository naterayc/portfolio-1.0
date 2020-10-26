import React from 'react';
import './projects.css';
import cptPreview from '../../img/cpt-preview-m.png';
import cptPreviewD from '../../img/cpt-preview-d.png';
import bqPreview from '../../img/bq-preview-m.png';
import bqPreviewD from '../../img/bq-preview-d.png';
import nomadaPreview from '../../img/nomada-preview-m.png';
import nomadaPreviewD from '../../img/nomada-preview-d.png';

const Projects = () => {
    return (
        <div className="projects-section">
            <h3>Proyectos</h3>
            <div className="projects-container">
                <div>
                    <picture>
                        <source srcSet={cptPreviewD} media='(min-width:600px)' />
                        <img source={cptPreview} alt="Comida para todos" />
                    </picture>
                </div>
                <div>
                    <picture>
                        <source srcSet={bqPreviewD} media='(min-width:600px)' />
                        <img source={bqPreview} alt="Burger Queen" />
                    </picture>
                </div>
                <div>
                    <picture>
                        <source srcSet={nomadaPreviewD} media='(min-width:600px)' />
                        <img source={nomadaPreview} alt="Nómada" />
                    </picture>
                </div>
            </div>
        </div>
    );
}

export default Projects;