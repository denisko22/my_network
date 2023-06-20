import React from "react";

import style from './profile.module.css';
import Preloader from "../../common/preloader/preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const  Profile=(props)=>{
  if(!props.profile){
    return <Preloader/>
  }
  
  const onMainPhotoSelected = (e)=>{
if(e.target.files.length){
  props.savePhoto(e.target.files[0])
}
  }
    return(
      
      <div className={style.profile}>
    <div className={style.filler}>
    <img src='https://media.npr.org/assets/img/2022/12/27/aubreytime1_wide-4d46e7de5e53fb2dc0bc417ca4ec8b5f124b2b20.jpg' alt='wtf'></img>
    </div>
    <div className={style.profile_logo}>
     <img  src={props.profile.photos.large || "https://static.vecteezy.com/system/resources/previews/007/576/295/non_2x/stop-killing-time-vector.jpg"} alt='ProfileImage'>
     
      </img>{props.isOwner && <div className={style.avatar_change}><input onChange={onMainPhotoSelected} type="file" id="files" className={style.hidden}/>
      <label for="files" className={style.file_label} >change avatar</label></div>}{/*profile image, also link to 'settings' */}
      
     <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
    </div>
    </div>
  )
};
export default Profile;
// "https://static.vecteezy.com/system/resources/previews/007/576/295/non_2x/stop-killing-time-vector.jpg"