import React from "react";
import style from './profile.module.css';
const Contact = ({contactSource,contactInfo}) => {
    return <div className={style.contacts}>{contactSource}:{contactInfo}</div>
}

export default Contact