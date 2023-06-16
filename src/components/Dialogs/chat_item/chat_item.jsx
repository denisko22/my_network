import style from "./chat_item.module.css";
import React from "react";
import { NavLink } from "react-router-dom";
const ChatItem = (props) => {
    return(
        
            
        
        <div className={style.chat_item}><NavLink to={'/Dialogs/'+ props.chat_num}>{props.name}</NavLink></div>
 

            
        
    )
}
export default ChatItem;