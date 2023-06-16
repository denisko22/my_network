import { stopSubmit } from "redux-form";
import { authAPI, usersAPI } from "../api/api";
let SET_USER_DATA = 'auth/SET_USER_DATA';

let initialState = {
    userId:null,
    email:null,
    login:null,
    isAuth:false
    
    
};
// [{id:1, imgUrl:'https://static.vecteezy.com/system/resources/previews/007/576/295/non_2x/stop-killing-time-vector.jpg', fullName:'Denis',location:{country:'Ukraine',city:'Drohobych'},followed:true, status:'Heeeey bro!'},
//     {id:2, imgUrl:'https://static.vecteezy.com/system/resources/previews/007/576/295/non_2x/stop-killing-time-vector.jpg', fullName:'Anna',location:{country:'Ukraine',city:'kyiv'},followed:false, status:'netflix and chill?;)'},
//     {id:3, imgUrl:'https://static.vecteezy.com/system/resources/previews/007/576/295/non_2x/stop-killing-time-vector.jpg', fullName:'Slavik',location:{country:'Germany',city:'mannheim'},followed:true, status:'i need 5 mil total of rockets!'},
//     {id:4, imgUrl:'https://static.vecteezy.com/system/resources/previews/007/576/295/non_2x/stop-killing-time-vector.jpg', fullName:'Nazir',location:{country:'Ukraine',city:'Lviv'},followed:true, status:'mashallah'}]
export const authReducer = (state=initialState, action) => {
    
    switch (action.type) {
        case SET_USER_DATA:    
            return{...state,
               ...action.data,
               login:action.data.login,
               
            };
                default: return state
        
        
    }
}
export let setData =(userId,email,login, isAuth)=>({type:SET_USER_DATA, data:{userId,email,login,isAuth}})
export const applyData = () => {
    return async(dispatch)=>{

       let data =  await usersAPI.getUserData();
       
          if(data.resultCode === 0)
          {dispatch (setData(data.data.id,data.data.email,data.data.login,true))
            
      }
       
       
       
       
    }
    
}
export const login = (email,password,rememberMe) => {
    
    return async (dispatch)=>{
        

        let data =  await authAPI.login(email,password,rememberMe)
        
          
          if(data.resultCode === 0)
          {dispatch (usersAPI.getUserData())
            
      }else{
       let message = data.messages.length>0 ? data.messages[0] : 'some error'
        dispatch(stopSubmit('login',{_error:message}))
      }
       }
       
       
       
    
}
export const logout = () => {
    return async(dispatch)=>{
        let data =  await authAPI.logout()
        
          
          if(data.resultCode === 0)
          {dispatch (setData(null,null,null,false))
            
      }
       
       
       
       
    }
}
export default authReducer;
