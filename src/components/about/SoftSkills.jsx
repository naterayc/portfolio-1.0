import React from 'react';
import './soft-skills.css';
import { Icon } from '@iconify/react';
import familyTree from '@iconify/icons-mdi/family-tree';
import lightbulbOnOutline from '@iconify/icons-mdi/lightbulb-on-outline';
import headLightbulbOutline from '@iconify/icons-mdi/head-lightbulb-outline';
import puzzleOutline from '@iconify/icons-mdi/puzzle-outline';

const SoftSkills = () => {
    return(
        <div className="soft-container">
            <div className="soft">
                <Icon icon={familyTree} />
                <p>Trabajo en equipo</p>
            </div>

            <div className="soft">
                <Icon icon={lightbulbOnOutline} />
                <p>Metodologías Ágiles</p>
            </div>

            <div className="soft">
                <Icon icon={headLightbulbOutline} />
                <p>Resolución de problemas</p>
            </div>

            <div className="soft">
                <Icon icon={puzzleOutline} />
                <p>Auto aprendizaje</p>
            </div>
        </div>
    );
}

export default SoftSkills;