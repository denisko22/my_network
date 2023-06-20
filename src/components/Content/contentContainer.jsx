import React from "react";
import style from './content.module.css';
import withAuthRedirect from "../hoc/withAuthRedirect";
import { setContent, getStatus,updateStatus} from '../../redux/profile-reducer'
import Content from "./content";
import { connect } from "react-redux";
import { useParams } from 'react-router-dom';
import { compose } from "redux";
import { savePhoto } from "../../redux/profile-reducer";
export function withRouter(Children){
  
  return(props)=>{



     const match  = {params: useParams()};

     return <Children {...props}  match = {match}/>

 }

}
let mapStateToProps = (state) => ({
  profile:state.myPosts.profile,
  status: state.myPosts.status,
  isAuth:state.auth.isAuth,
  authorisedId:state.auth.userId
 
 })
 
class  ContentContainer extends React.Component{
  refreshProfile(){
    let userId = this.props.match.params.userId;
    if(!userId){
      userId = this.props.authorisedId
      if(!userId){
        this.props.history.push('/login');
      }
    }
    this.props.setContent(userId);
    this.props.getStatus(userId)
  }
  componentDidMount(){
    // let userId = this.props.match.params.userId;
    // if(!userId){
    //   userId = this.props.authorisedId
    //   if(!userId){
    //     this.props.history.push('/login');
    //   }
    // } ;
    // this.props.setContent(userId);
    // this.props.getStatus(userId)
    this.refreshProfile()
    
  //  let userId = this.props.match.params.userId;
  //  if(!userId) userId = 29048;
  //  usersAPI.setContent(userId).then(data=>{
       
  //     this.props.setContentOnClick(data)
   
  // })
  }
  componentDidUpdate(prevProps,prevState,snapshot){
    
    if(this.props.match.params.userId!=prevProps.match.params.userId){
      this.refreshProfile()
  //   let userId = this.props.match.params.userId;
  //   if(!userId){
  //     userId = this.props.authorisedId
  //     if(!userId){
  //       this.props.history.push('/login');
  //     }
  // }
  }
  // this.props.setContent(userId);
  // this.props.getStatus(userId)
}
  render(){
    
    return(
      
      <Content {...this.props} isOwner={!this.props.match.params.userId} savePhoto={this.props.savePhoto} status={this.props.status} updateStatus={this.props.updateStatus}/>
    )
  }
};
export default compose(connect (mapStateToProps,{setContent, getStatus,updateStatus,savePhoto}),
withAuthRedirect,
withRouter)
(ContentContainer);

