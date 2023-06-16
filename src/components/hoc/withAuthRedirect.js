import { Navigate } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";

let mapStateToPropsForRedirect = (state) => ({
    isAuth:state.auth.isAuth
   })
let withAuthRedirect = (Component) =>{
    class RedirectComponent extends React.Component{
        render(){
            if (!this.props.isAuth) {return   <Navigate to={"/Login/"} />}
            return<Component {...this.props}/>
            
        }
    }
    let ConnectedAuthRedirectComponent= connect(mapStateToPropsForRedirect,)(RedirectComponent);
    return ConnectedAuthRedirectComponent;
}

   
export default withAuthRedirect; 