import React from 'react';
import { Icon } from "@iconify/react";
import xIcon from "@iconify/icons-feather/x";
import './modal.css';

const ModalCPT = (props) => {
    return (
        <div className="modal-container">
            <div className="modal-content">
                <Icon icon={xIcon} onClick={props.close} />
                <h3>{props.title}</h3>
                <div>
                    <picture>
                        <source srcSet={props.img} />
                        <img source={props.img} alt="preview comida para todos" />
                    </picture>
                    <p>{props.info} <span>{props.tecnologies}</span>.</p>
                </div>
                <div className="btn-container">
                    <div>
                        <a href={props.demo} target="_/blank">
                            <button type="button">Ir al Demo</button>
                        </a>
                    </div>
                    <div>
                        <a href={props.code} target="_/blank">
                            <button type="button">Ir al Código</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalCPT;