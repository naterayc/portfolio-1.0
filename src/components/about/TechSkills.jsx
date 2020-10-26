import React from 'react';
import { Icon } from '@iconify/react';
import reactIcon from '@iconify/icons-mdi/react';
import languageJavascript from '@iconify/icons-mdi/language-javascript';
import languageHtml5 from '@iconify/icons-mdi/language-html5';
import languageCss3 from '@iconify/icons-mdi/language-css3';
import './tech-skills.css';

const TechSkills = () => {
    return(
        <div className='tech-container'>
            <div className='tech'>
                <Icon icon={reactIcon} />
                <p>React.js</p>
            </div>

            <div className='tech'>
            <Icon icon={languageJavascript} />
                <p>Javascript ES6</p>
            </div>

            <div className='tech'>
            <Icon icon={languageHtml5} />
                <p>HTML 5</p>
            </div>

            <div className='tech'>
            <Icon icon={languageCss3} />
                <p>CSS 3</p>
            </div>
        </div>
    );
}

export default TechSkills;