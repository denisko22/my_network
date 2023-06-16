import React from "react";
import Header from "./header";
import { connect } from "react-redux";
// import {  applyData } from "../../redux/auth-reducer";
import { compose } from "redux";
import { logout } from "../../redux/auth-reducer";
class HeaderContainer extends React.Component {
//   componentDidMount(){
//     this.props.applyData()
//   //   usersAPI.getUserData()
//   //   .then(data=>{
      
//   //     if(data.resultCode === 0)
//   //     {this.props.setData(data.data.id,data.data.email,data.data.login)
        
//   // }
//   //  }
   
//   //  )
   
//    }

    render () {  
      
      return (
      <Header {...this.props} />
      )}}
      let mapStateToProps = (state) =>{
        return{
            userId: state.auth.userId,
            email:state.auth.email,
            login:state.auth.login,
            auth:state.auth.isAuth
    
        }
       }
       export default compose(connect(mapStateToProps,{ logout}),)(HeaderContainer);
      