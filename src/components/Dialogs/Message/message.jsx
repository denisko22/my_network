import style from './message.module.css';
import React from "react";
const Message = (props) =>{
    return(
        <div className={style.chat_message}>{props.text}</div>
    )
}
export default Message