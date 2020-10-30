import React, { useState } from 'react';
import './contact.css';
import { Icon } from '@iconify/react';
import emailIcon from '@iconify/icons-mdi/email';
import linkedinIcon from '@iconify/icons-mdi/linkedin';
import githubIcon from '@iconify/icons-mdi/github';
import codeNotEqualVariant from '@iconify/icons-mdi/code-not-equal-variant';
import gmailIcon from '@iconify/icons-mdi/gmail';
import clipboardOutline from '@iconify/icons-mdi/clipboard-outline';
import clipboardCheckOutline from '@iconify/icons-mdi/clipboard-check-outline';
import { CopyToClipboard } from 'react-copy-to-clipboard';


const Contact = () => {

    const [showEmail, setShowEmail] = useState(false);
    const [clipboardIcon, setClipboardIcon] = useState(clipboardOutline)

    const showMailOptions = () => {
        if (showEmail === false) {
            setShowEmail(true);
        } else {
            setShowEmail(false);
        }
    }

    const setIcon = () => {
        setClipboardIcon(clipboardCheckOutline)
    }

    return (
        <div className="contact-container">
            <h3>Contacto</h3>
            <p> Si te interesa mi perfil profesional o quieres conocer más sobre mis proyectos o habilidades  ¡Contáctame!</p>
            <div>
                <button type="button" onClick={showMailOptions}>
                    <Icon icon={emailIcon} />
                </button>
                <a href='https://www.linkedin.com/in/naterayc/' target="_blank" rel="noreferrer">
                    <Icon icon={linkedinIcon} />
                </a>
                <a href='https://github.com/naterayc' target="_blank" rel="noreferrer">
                    <Icon icon={githubIcon} />
                </a>
                <a href='https://app.talento.laboratoria.la/profile/EpNbf3MmDGhTRq16nmkUDveDqsO2' target="_blank" rel="noreferrer">
                    <Icon icon={codeNotEqualVariant} />
                </a>
            </div>
            {showEmail === false ? null : <div className="email-options">
                    <a href='https://mail.google.com/mail/?view=cm&fs=1&to=yndinatera10@gmail.com' target="_blank" rel="noreferrer">
                        <div><Icon icon={gmailIcon} /></div> Enviar correo con Gmail
                    </a>
                <div>
                    <CopyToClipboard text="yndinatera10@gmail.com">
                        <span onClick={setIcon} ><div><Icon icon={clipboardIcon} /></div> Copiar correo al portapapeles</span>
                    </CopyToClipboard>
                </div>
            </div>}
        </div>
    );
}

export default Contact;