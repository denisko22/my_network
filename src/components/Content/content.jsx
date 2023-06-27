import React from "react";
import style from './content.module.css';

import Profile from "./Profile/Profile";
import PostsContainer from "./MyPosts/MyPostsContainer";


const  Content=(props)=>{
  
    return(<div className={style.content}>
    <Profile saveProfile={props.saveProfile} savePhoto={props.savePhoto} isOwner={props.isOwner} profile = {props.profile} status={props.status} updateStatus={props.updateStatus}/>
    {/* <Posts newMessageText={props.newMessageText} messageText={props.messageText}  store={props.store}/> */}
    <PostsContainer  profile = {props.profile} updateStatus={props.updateStatus}/>
  </div>)
};
export default Content;