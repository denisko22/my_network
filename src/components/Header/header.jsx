import React from "react";
import { NavLink } from "react-router-dom";
import style from './header.module.css';

const Header=(props)=> {
  
    return (
      <header className={style.header}>
      <NavLink to='/Help'><img src='https://images.theconversation.com/files/296052/original/file-20191008-128681-ngzwqb.jpg?ixlib=rb-1.1.0&rect=15%2C20%2C929%2C926&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip' alt='wtf'></img></NavLink>
      <div className={style.login_block}>{props.auth ? <NavLink to='/Profile' className={style.text_login}><div>{props.login}   <div onClick={props.logout}>Log out</div></div></NavLink> :<NavLink to='/login' className={style.text_login}>login</NavLink>}</div>
      </header>)};
      export default Header;