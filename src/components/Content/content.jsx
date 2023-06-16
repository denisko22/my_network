import React from "react";
import style from './content.module.css';

import Profile from "./Profile/Profile";
import PostsContainer from "./MyPosts/MyPostsContainer";

console.log(style);
const  Content=(props)=>{
  
    return(<div className={style.content}>
    <Profile profile = {props.profile} status={props.status} updateStatus={props.updateStatus}/>
    {/* <Posts newMessageText={props.newMessageText} messageText={props.messageText}  store={props.store}/> */}
    <PostsContainer profile = {props.profile} updateStatus={props.updateStatus}/>
  </div>)
};
export default Content;