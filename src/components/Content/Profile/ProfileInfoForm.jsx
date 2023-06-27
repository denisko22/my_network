import React from "react"
import Contact from "./Contact";
import style from './profile.module.css';
import { Input, Textarea, createField } from "../../common/FormsControl/formsControl";
import s from "./../../common/FormsControl/formsControl.module.css"
import { reduxForm } from "redux-form";

const ProfileInfoForm = ({profile,goToEditMode,isOwner,handleSubmit,error})=>{
   
      return (
      <form onSubmit={handleSubmit} name="profileInfo"  className={style.profile_info}>
       <div onClick={goToEditMode } className={style.form_button} >edit</div>
       {error && <div className={s.summary_error}>
                {error}
                </div>}
      <div>
      <div><b>Fullname</b>:{profile.fullName}
       {createField('Full name','FullName',Input)}</div>
      <div><b>Currently looking for a job</b>:  {profile.lookingForAJob ? 'yes' : 'no'}
      {createField('','LookingForAJob',Input,[],{type:'checkbox'})}</div>
      <div><b>Skills:</b>{profile.lookingForAJobDescription} {createField('Skills','LookingForAJobDescription',Textarea)}</div>
      <div><b>About me:</b>{profile.aboutMe} {createField('About me','AboutMe',Textarea)}</div>
      {/* <div><b>Skills:</b> {profile.lookingForAJobDescription}</div> */}
      {/* { profile.lookingForAJob && <div><b>Skills:</b>: {profile.lookingForAJobDescription}</div>} */}
      {/* <div><b>Fullname</b>: {profile.fullName}</div> */}
      
      <div>
        <b>   Contacts</b>:{Object.keys(profile.contacts).map(key =>  {
          return <div key={key} className={style.contacts}>
              {key}:{ createField(key,`contacts.`+key,Input)}
        </div> })}
      </div>
      
      </div> 
      <div><button className={style.form_button} >save</button></div>
    </form>)
  }

  const ProfileInfoFormReduxForm = reduxForm({form:'edit-profile'})(ProfileInfoForm);
  export default ProfileInfoFormReduxForm