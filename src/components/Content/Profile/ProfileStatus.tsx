import React, { ChangeEvent } from "react";

import style from './profile.module.css';

type PropsType = {
  status:string
  updateStatus:(newstatus:string)=>void
}

type StateType={
  editMode:boolean
  status:string
}

class  ProfileStatus extends React.Component<PropsType>{
state ={editMode:false,
  status: this.props.status
        
};

// statusInputRef = React.createRef();

activateEditMode =() =>{
  
  this.setState({
    editMode:true,
    status:this.state.status,
  })
  
  
}
deActivateEditMode =() =>{
  
  this.setState({
    editMode:false,
    
  })
  this.props.updateStatus(this.state.status)
  
}

onStatusChange =(e:ChangeEvent<HTMLInputElement>)=>{
  this.setState({status:e.currentTarget.value})
}

componentDidUpdate(prevProps:PropsType, prevState:StateType){
  
  if(prevProps.status !== this.props.status){
    this.setState({
      status: this.props.status
  })}

  
}
render(){
    return(
      
     <div className={style.status_block} > 
    { !this.state.editMode && 
    <div >
        <span onDoubleClick={this.activateEditMode} >{this.props.status || '---'}</span>
    </div>}
    {this.state.editMode && 
    <div>
      <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deActivateEditMode} className={style.status_input} value={this.state.status} />
    </div>}
    </div>
  )
};
}
export default ProfileStatus;
// "https://static.vecteezy.com/system/resources/previews/007/576/295/non_2x/stop-killing-time-vector.jpg"