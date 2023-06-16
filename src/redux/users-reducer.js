import { usersAPI} from '../api/api'
import { UpdateObjectInArray } from '../utils/objectHelpers';
let FOLLOW = 'usersPage/FOLLOW';
let UNFOLLOW = 'usersPage/UNFOLLOW';
let SET_USERS = 'usersPage/SET_USERS';
let SET_PAGE = 'usersPage/SET_PAGE';
let SET_USERS_COUNT = 'usersPage/SET_USERS_COUNT';
let SET_IS_FETCHING = 'usersPage/SET_IS_FETCHING';
let SET_FOLLOW_PROGRESS = 'usersPage/SET_FOLLOW_PROGRESS';
let initialState = {
    users:[],
    totalUsersCount:0,
    pageSize: 5,
    currentPage:1,
    isFetching:false,
    followInProgress:[]
    
    
};
// [{id:1, imgUrl:'https://static.vecteezy.com/system/resources/previews/007/576/295/non_2x/stop-killing-time-vector.jpg', fullName:'Denis',location:{country:'Ukraine',city:'Drohobych'},followed:true, status:'Heeeey bro!'},
//     {id:2, imgUrl:'https://static.vecteezy.com/system/resources/previews/007/576/295/non_2x/stop-killing-time-vector.jpg', fullName:'Anna',location:{country:'Ukraine',city:'kyiv'},followed:false, status:'netflix and chill?;)'},
//     {id:3, imgUrl:'https://static.vecteezy.com/system/resources/previews/007/576/295/non_2x/stop-killing-time-vector.jpg', fullName:'Slavik',location:{country:'Germany',city:'mannheim'},followed:true, status:'i need 5 mil total of rockets!'},
//     {id:4, imgUrl:'https://static.vecteezy.com/system/resources/previews/007/576/295/non_2x/stop-killing-time-vector.jpg', fullName:'Nazir',location:{country:'Ukraine',city:'Lviv'},followed:true, status:'mashallah'}]
export const UsersReducer = (state=initialState, action) => {
    
    switch (action.type) {
        case FOLLOW:    
            return{...state,
                users:UpdateObjectInArray(state.users,action.userId,'id',{followed : true})
            };
    
            //     users:state.users.map(u  => {if(u.id === action.userId){
            //         return{...u,followed : true}
            //    }return u})
            
        case UNFOLLOW:
            
        return{...state,users:UpdateObjectInArray(state.users,action.userId,'id',{followed : false})}
            //  {...state,
            //     users:state.users.map(u  => {if(u.id === action.userId){
            //          return{...u, followed : false}
            //     }return u}),
            // };

            case SET_USERS:{
                
                return{ ...state, users: action.users }}

            case SET_PAGE:{
                return{...state, currentPage:action.page}
            }
            case SET_USERS_COUNT:{
                return{...state, totalUsersCount:action.totalCount}
            }
            case SET_IS_FETCHING:
                
                return{...state, isFetching:action.isFetching}

                case SET_FOLLOW_PROGRESS:
                    return{
                        ...state,
                         followInProgress:action.isFollowing
                         ?[...state.followInProgress, action.userId]
                         : state.followInProgress.filter(id => id!= action.userId)
                        }
                default: return state

        
        
    }
}
export const followOnClick =(userId)=>({type:FOLLOW, userId})
    export const unFollowOnClick =(userId)=>({type:UNFOLLOW, userId})
    export const setUsersOnClick =(users)=>({type:SET_USERS,users})
    export const changePageOnClick =(page)=>({type:SET_PAGE,page})
    export const setUsersCount =(totalCount)=>({type:SET_USERS_COUNT,totalCount})
    export const setIsFetching =(isFetching)=>({type:SET_IS_FETCHING,isFetching})
    export const setFollowProgress =(isFollowing,userId)=>({type:SET_FOLLOW_PROGRESS,isFollowing,userId})

    export const getUsers = (pageSize,currentPage) =>{
        return   async (dispatch) => {
            dispatch (setIsFetching(true))
            let data = await usersAPI.getUsers(pageSize,currentPage)
                
                dispatch (changePageOnClick(currentPage))
                  dispatch (setUsersOnClick(data.items))
                  dispatch (setUsersCount(data.totalCount))
                  dispatch (setIsFetching(false))
               
        }
    }

    const followUnfollowSuccessFlow = async (dispatch,userId,apiMethod,actionCreator) =>{
        dispatch( setFollowProgress(true,userId))
        let data = await apiMethod(userId)
            if(data.resultCode===0){
                dispatch( actionCreator(userId));
                
          }
          dispatch( setFollowProgress(false,userId))
    }
    export const followSuccess = (userId) =>{
        return  async (dispatch) => {
            let apiMethod = usersAPI.followUser.bind(usersAPI)
            let actionCreator = followOnClick
            followUnfollowSuccessFlow(dispatch,userId,apiMethod,actionCreator)
              
          
        }
    }
    export const unfollowSuccess = (userId) =>{
        return async (dispatch) => {
            let apiMethod = usersAPI.unfollowUser.bind(usersAPI)
            let actionCreator = unFollowOnClick
            followUnfollowSuccessFlow(dispatch,userId,apiMethod,actionCreator)  
                              
                          
        }
    }

    

