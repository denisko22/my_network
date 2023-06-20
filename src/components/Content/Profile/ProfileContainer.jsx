import React from "react";
import Profile from "./Profile";
console.log(style);
class  ProfileContainer extends React.Component{
  render(){
    return(
      <Profile isOwner={props.isOwner} {...this.props}/>
  )
}};
export default ProfileContainer;
