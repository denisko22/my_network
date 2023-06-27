import React from "react"
import style from './profile.module.css';
import Contact from "./Contact";


const ProfileInfo = ({profile,goToEditMode,isOwner,contacts})=>{
 
    return (<div className={style.profile_info}>
      <div onClick={goToEditMode} className={style.form_button}>edit</div>
    <div >
    <div><b>Fullname</b>: {profile.fullName}</div>
    <div><b>Currently looking for a job</b>:  {profile.lookingForAJob ? 'yes' : 'no'}</div>
    <div><b>Skills:</b> {profile.lookingForAJobDescription}</div>
    <div><b>About me:</b>{profile.aboutMe}</div>
    <div>
      <b>   Contacts</b>:{Object.keys(profile.contacts).map(key =>  {return <Contact  key={key} contactSource={key} contactInfo={profile.contacts[key]}/>})}
    </div>
    <div></div>
    </div> 
  </div>)
}
export default ProfileInfo