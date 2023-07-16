import React from "react";
import s from "./../common/FormsControl/formsControl.module.css"
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { Input } from "../common/FormsControl/formsControl";
import { requiredField,maxLengthCreator } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login,logout } from "../../redux/auth-reducer";
import { Navigate ,  } from "react-router-dom";
import { AppStateType } from "../../redux/redux-store";



 let validateInputs = [requiredField,maxLengthCreator(25)]
const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType,LoginOwnPropsTypes>  & LoginOwnPropsTypes>= ({handleSubmit,error,captchaUrl})=>{
   
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
                {captchaUrl && <img src={captchaUrl}/>}
                {captchaUrl && <Field placeholder='captcha symbols' name={"captcha"} component={Input} validate={validateInputs}/> }
                <div>
                  <Field component={'button'} name="submit" >Login </Field> 
                </div>
                
            </div>
        </form>
         
    )
    
}
const LoginReduxForm = reduxForm<LoginFormValuesType,LoginOwnPropsTypes>({
form:'login'
})(LoginForm)

const Login: React.FC<MapStateType & MapDispatchType > = (props) =>{
    const onSubmit =(formData:any)=>{
        props.login(formData.email,formData.password,formData.rememberMe,formData.captcha)
        // console.log(formData);
    }
    if(props.isAuth){
       return <Navigate to={'/Profile'} />
    }
    return(

        <div className={s.login}>
            
            <h1>login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
    
}
type LoginOwnPropsTypes ={
    captchaUrl:string | null
}
export type LoginFormValuesType ={
    email:string | null
    password:string | null
    rememberMe:boolean | null
    captcha:string | null
}
type MapDispatchType ={
    login:(email:string | null,password:string | null,rememberMe:boolean | null,captcha:string | null)=>void

}
type MapStateType = {
    captchaUrl:string | null
    isAuth:boolean
}
export type LoginFormValuesTypeKeys = Extract<keyof LoginFormValuesType, string>
 const mapStateToProps =(state:AppStateType):MapStateType =>({
    isAuth: state.auth.isAuth,
    captchaUrl:state.auth.captchaUrl

 })
export default connect(mapStateToProps,{login,logout}) (Login);