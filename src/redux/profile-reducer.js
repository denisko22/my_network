import { stopSubmit } from "redux-form";
import { usersAPI, profileAPI } from "../api/api";
let ADD_POST = 'myPosts/ADD-POST';
// let NEW_POST_TEXT = 'NEW-POST-TEXT';
let SET_CONTENT_ON_CLICK='myPosts/SET_CONTENT_ON_CLICK';
let SET_STATUS='myPosts/SET_STATUS';
let DELETE_POST='myPosts/DELETE_POST';
let SAVE_PHOTO_SUCCESS = 'myPosts/SAVE_PHOTO_SUCCESS'

let initialState = { messageText:[
  { id: 1, text: "Hello, my name is Gustavo" },
  { id: 2, text: "But you can call me Gus" },
  { id: 3, text: "I'm the CEO of Los Pollos Hermanos" },
  { id: 4, text: "And your personal waiter)" }
],
profile:null,
status:''

}
const ProfileReducer =(state = initialState,action)=>{
  
  switch (action.type) {
    case ADD_POST:
      
        let newPost={
        id: state.messageText.length+1,
        // id: 1,
        text:action.newMessageText 
      }
    return {...state,
      messageText: [...state.messageText,newPost]
    };
    // case NEW_POST_TEXT:

    //     return {...state,newMessageText:action.newText};

        case SET_CONTENT_ON_CLICK:
          return{...state, profile:action.content};

          case SET_STATUS:
            return{...state, status:action.status};

          case  DELETE_POST:
            return{...state, postId:state.messageText.filter(p=>p!=action.postId)}

          case SAVE_PHOTO_SUCCESS:
            return{...state, profile :{...state.profile, photos:action.photos} }

      default:return state;
  }
    
    }
    export let addPostActionCreator = (newMessageText) => ({type: ADD_POST,newMessageText:newMessageText})
// export let newPostTextActionCreator = (text) =>({type:NEW_POST_TEXT, newText:text})
    export default ProfileReducer
    export let setContentOnClick = (content) => ({type: SET_CONTENT_ON_CLICK, content})

    export let setStatus = (status) => ({type: SET_STATUS, status})
    export let deletePost = (postId) => ({type: DELETE_POST, postId})
    export let savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})
   


    export const setContent= (uId)=>{
      return  async (dispatch)=>{
        let userId = uId;
  //  if(!userId)userId = 29048 ;
      // if(!initialState.status) initialState.status = 'loler'
   let data = await usersAPI.setContent(userId)
       
      dispatch(setContentOnClick(data))
   
  
      }
    }
    export const getStatus= (uId)=>{
      return async (dispatch)=>{
        let userId = uId;
    let data = await profileAPI.getStatus(userId)
       
      dispatch(setStatus(data))
   
 
      }
    }
    export const updateStatus= (status)=>{
      return async (dispatch)=>{
        
   
    let data = await profileAPI.updateStatus(status)
     if(data.resultCode ===0)  {
      dispatch(setStatus(status))
   }
  
      }
    }

    export const savePhoto = (photo) =>{
      return async(dispatch)=>{
        let data = await profileAPI.savePhoto(photo)
        if(data.resultCode ===0)  {
          dispatch(savePhotoSuccess(data.data.photos))
       }
      }
    }
    
    export const saveProfile = (profile) =>{
      return async(dispatch,getState)=>{
        const userId = getState().auth.userId
        let data = await profileAPI.saveProfile(profile)
        
        
        if(data.resultCode === 0)  {
          dispatch(setContent(userId)) 
      //     dispatch(saveProfileSuccess(data.data.profile))
       }else{
        let message = data.messages.length>0 ? data.messages[0] : 'some error'
         dispatch(stopSubmit('edit-profile',{_error:message}))
         return Promise.reject(message)
      }

    }
  }