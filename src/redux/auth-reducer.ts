import { stopSubmit } from "redux-form";
import { authAPI, securityAPI, usersAPI } from "../api/api";
let SET_USER_DATA = 'auth/SET_USER_DATA';
let GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS'
export type InitialStateType = {
    userId:number | null,
    email:string | null,
    login:string | null,
    isAuth:boolean,
    captchaUrl:string | null
}
let initialState:InitialStateType = {
    userId:null,
    email:null,
    login:null,
    isAuth:false,
    captchaUrl:null
    
    
};
// [{id:1, imgUrl:'https://static.vecteezy.com/system/resources/previews/007/576/295/non_2x/stop-killing-time-vector.jpg', fullName:'Denis',location:{country:'Ukraine',city:'Drohobych'},followed:true, status:'Heeeey bro!'},
//     {id:2, imgUrl:'https://static.vecteezy.com/system/resources/previews/007/576/295/non_2x/stop-killing-time-vector.jpg', fullName:'Anna',location:{country:'Ukraine',city:'kyiv'},followed:false, status:'netflix and chill?;)'},
//     {id:3, imgUrl:'https://static.vecteezy.com/system/resources/previews/007/576/295/non_2x/stop-killing-time-vector.jpg', fullName:'Slavik',location:{country:'Germany',city:'mannheim'},followed:true, status:'i need 5 mil total of rockets!'},
//     {id:4, imgUrl:'https://static.vecteezy.com/system/resources/previews/007/576/295/non_2x/stop-killing-time-vector.jpg', fullName:'Nazir',location:{country:'Ukraine',city:'Lviv'},followed:true, status:'mashallah'}]
export const authReducer = (state=initialState, action:any) => {
    
    switch (action.type) {
        case SET_USER_DATA:    
            return{...state,
               ...action.data,
               login:action.data.login,
               
            };
        case GET_CAPTCHA_URL_SUCCESS:
            return{
                ...state,
                ...action.payload
                
            }
                default: return state
        
        
    }
}
type SetUserDataPayLoadType ={
    userId:number | null
    email:string | null
    login:string | null
    isAuth:boolean
}
type SetUserDataType={
    type:typeof SET_USER_DATA
    data:SetUserDataPayLoadType
}
export let setData =(userId : number |null,email: string |null,login: string |null, isAuth:boolean):SetUserDataType=>({type:SET_USER_DATA, data:{userId,email,login,isAuth}})

type GetCaptchaUrlSuccessType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS
    payload:{
        captchaUrl:string
    }
}
export let getCaptchaUrlSuccess = (captchaUrl:string):GetCaptchaUrlSuccessType=>({type:GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}})
export const applyData = () => {
    return async(dispatch:any)=>{

       let data =  await usersAPI.getUserData();
       
          if(data.resultCode === 0)
          {dispatch (setData(data.data.id,data.data.email,data.data.login,true))
            
      }
       
       
       
       
    }
    
}
export const login = (email:string | null,password:string | null,rememberMe:boolean | null,captcha:string | null) => {
    
    return async (dispatch:any)=>{
        

        let data =  await authAPI.login(email,password,rememberMe,captcha)
        
          
          if(data.resultCode === 0)
          {dispatch (usersAPI.getUserData())
            
      }else{
        if(data.resultCode===10){
            dispatch(getCaptchaUrl())
        }else{
       let message = data.messages.length > 0 ? data.messages[0] : 'some error'
        dispatch(stopSubmit('login',{_error:message}))}
      }
       } 
}
export const logout = () => {
    return async(dispatch:any)=>{
        let data =  await authAPI.logout()
        
          
          if(data.resultCode === 0)
          {dispatch (setData(null,null,null,false))
            
      }
       
       
       
       
    }
}
export const getCaptchaUrl = () => {
    
    return async (dispatch:any)=>{
        

        const data =  await securityAPI.getCaptchaUrl()
        const captchaUrl = data.url
         dispatch(getCaptchaUrlSuccess(captchaUrl)) 
         
    //    let message = data.messages.length>0 ? data.messages[0] : 'some error'
    //     dispatch(stopSubmit('login',{_error:message}))
      
       } 
}
export default authReducer;
