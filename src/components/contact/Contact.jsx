import React from 'react';
import './contact.css';
import { Icon } from '@iconify/react';
import emailIcon from '@iconify/icons-mdi/email';
import linkedinIcon from '@iconify/icons-mdi/linkedin';
import githubIcon from '@iconify/icons-mdi/github';

const Contact = () => {
    return (
        <div className="contact-container">
            <h3>Contacto</h3>
            <div>
                <Icon icon={emailIcon} />
                <Icon icon={linkedinIcon} />
                <Icon icon={githubIcon} />
            </div>
        </div>
    );
}

export default Contact;