import React, { useEffect } from "react";

import style from './profile.module.css';
import { useState } from "react";


const  ProfileStatusWithHooks = (props)=>{

  let [editMode,setEditMode]=useState(false);
  let [status,setStatus]=useState(props.status);
  useEffect( () =>{
      setStatus(props.status)
  },[props.status])

  const activateEditMode =()=>{
    setEditMode(true)
  }
  const deActivateEditMode =() =>{
    setEditMode(false)
    props.updateStatus(status)
  }
  const onStatusChange =(e)=>{
    setStatus(e.currentTarget.value)
  }
  // if(status !== props.status){
    
  //   setStatus(props.status)
  // }
    return(
      
     <div className={style.status_block} > 
    { !editMode && 
    <div >
        <span onDoubleClick={activateEditMode} >{props.status || '---'}</span>
    </div>}
    {editMode && 
    <div>
      <input onChange={onStatusChange} onBlur={deActivateEditMode} autoFocus={true} className={style.status_input}
      value={status} />
    </div>}
    </div>
  )
};

export default ProfileStatusWithHooks;
// "https://static.vecteezy.com/system/resources/previews/007/576/295/non_2x/stop-killing-time-vector.jpg"