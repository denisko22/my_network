import React from "react";
import { NavLink } from "react-router-dom";
import style from './nav_bar.module.css';
import Friends from "./friends/friends";

const Nav=(props)=>{
  
  // let newFriends = props.friendsData.map(friend => <Friends id={friend.id} name={friend.name} />);

return(<nav className={style.nav}>
  <div className={style.nav__item} >
   <NavLink to='Profile' >Profile</NavLink >
  </div>
  <div className={style.nav__item}>
    <NavLink to='Dialogs'>Messages</NavLink >
  </div>
  <div className={style.nav__item}>
    <NavLink to='News'>News</NavLink >
  </div>
  <div className={style.nav__item}>
    <NavLink  to='Music'>Music</NavLink>
  </div>
  <div className={style.nav__item+ ' ' + style.nav__settings}>
    <NavLink to='Settings'>Settings</NavLink >
  </div>
  <div className={style.nav__item}>
<NavLink to='Users' >Users</NavLink >
  </div>
  <div className={style.nav__item + " " + style.friendList} >
  <h1><NavLink to='Profile' >Friends</NavLink ></h1>
  
  {/* <div className={style.friends}>
  {newFriends}
  </div> */}
  </div>
</nav>)};
export default Nav;