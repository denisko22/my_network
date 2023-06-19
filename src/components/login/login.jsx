import React from "react";
import s from "./../common/FormsControl/formsControl.module.css"
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormsControl/formsControl";
import { requiredField,maxLengthCreator } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login,logout } from "../../redux/auth-reducer";
import { Navigate ,  } from "react-router-dom";



 let validateInputs = [requiredField,maxLengthCreator(25)]
const LoginForm = ({handleSubmit,error})=>{
   
    return(
        
        <form  onSubmit={handleSubmit} >
            <div>
                <div>
               
                    <Field  placeholder="Login" name={"email"} component={Input} validate={validateInputs}/>
                </div>
                <div>
                    <Field placeholder="Password" name={"password"} type='password' component={Input} validate={validateInputs}/>
                </div>
                <div>
                    <Field type="checkbox" name={"rememberMe"}  component={Input}  /> Remember me
                </div>
               {error && <div className={s.summary_error}>
                {error}
                </div>}
                <div>
                  <Field component={'button'} name="submit" >Login </Field> 
                </div>
                
            </div>
        </form>
         
    )
    
}
const LoginReduxForm = reduxForm({
form:'login'
})(LoginForm)
const Login = (props) =>{
    const onSubmit =(formData)=>{
        props.login(formData.email,formData.password,formData.rememberMe)
        // console.log(formData);
    }
    if(props.isAuth){
       return <Navigate to={'/Profile'} />
    }
    return(

        <div className={s.login}>
            
            <h1>login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
    
}

 const mapStateToProps =(state) =>({
    isAuth: state.auth.isAuth

 })
export default connect(mapStateToProps,{login,logout}) (Login);