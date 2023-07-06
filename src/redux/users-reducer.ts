import { usersAPI} from '../api/api'
import { UpdateObjectInArray } from '../utils/objectHelpers';
let FOLLOW = 'usersPage/FOLLOW';
let UNFOLLOW = 'usersPage/UNFOLLOW';
let SET_USERS = 'usersPage/SET_USERS';
let SET_PAGE = 'usersPage/SET_PAGE';
let SET_USERS_COUNT = 'usersPage/SET_USERS_COUNT';
let SET_IS_FETCHING = 'usersPage/SET_IS_FETCHING';
let SET_FOLLOW_PROGRESS = 'usersPage/SET_FOLLOW_PROGRESS';
type UserType = {
    id:number
    name:string
    status:string|null
}

let initialState = {
    users:[] as Array<UserType>,
    totalUsersCount:0 as number,
    pageSize: 5 as number,
    currentPage: 1 as number,
    isFetching:false as boolean,
    followInProgress:[] as Array<number>
    
    
};
type InitialStateType = typeof initialState

// [{id:1, imgUrl:'https://static.vecteezy.com/system/resources/previews/007/576/295/non_2x/stop-killing-time-vector.jpg', fullName:'Denis',location:{country:'Ukraine',city:'Drohobych'},followed:true, status:'Heeeey bro!'},
//     {id:2, imgUrl:'https://static.vecteezy.com/system/resources/previews/007/576/295/non_2x/stop-killing-time-vector.jpg', fullName:'Anna',location:{country:'Ukraine',city:'kyiv'},followed:false, status:'netflix and chill?;)'},
//     {id:3, imgUrl:'https://static.vecteezy.com/system/resources/previews/007/576/295/non_2x/stop-killing-time-vector.jpg', fullName:'Slavik',location:{country:'Germany',city:'mannheim'},followed:true, status:'i need 5 mil total of rockets!'},
//     {id:4, imgUrl:'https://static.vecteezy.com/system/resources/previews/007/576/295/non_2x/stop-killing-time-vector.jpg', fullName:'Nazir',location:{country:'Ukraine',city:'Lviv'},followed:true, status:'mashallah'}]
export const UsersReducer = (state=initialState, action:any) => {
    
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
type FollowOnClickType = {
    type:typeof FOLLOW
    userId:number
}
export const followOnClick =(userId:number):FollowOnClickType=>({type:FOLLOW, userId})
type UnFollowOnClickType = {
    type:typeof UNFOLLOW
    userId:number
}
    export const unFollowOnClick =(userId:number):UnFollowOnClickType=>({type:UNFOLLOW, userId})
    type SetUsersOnClickType = {
        type:typeof SET_USERS
        users:Array<UserType>
    }
    export const setUsersOnClick =(users:Array<UserType>):SetUsersOnClickType=>({type:SET_USERS,users})
    type ChangePageOnClickType = {
        type:typeof SET_PAGE
        page:number
    }
    export const changePageOnClick =(page:number):ChangePageOnClickType=>({type:SET_PAGE,page})
    type SetUsersCountType = {
        type:typeof SET_USERS_COUNT
        totalCount:number
    }
    export const setUsersCount =(totalCount:number):SetUsersCountType=>({type:SET_USERS_COUNT,totalCount})
    type SetIsFetchingType = {
        type:typeof SET_IS_FETCHING
        isFetching:boolean
    }
    export const setIsFetching =(isFetching:boolean):SetIsFetchingType=>({type:SET_IS_FETCHING,isFetching})
    type SetFollowProgressType = {
        type:typeof SET_FOLLOW_PROGRESS
        isFollowing:boolean
        userId:number
    }
    export const setFollowProgress =(isFollowing:boolean,userId:number):SetFollowProgressType=>({type:SET_FOLLOW_PROGRESS,isFollowing,userId})

    export const getUsers = (pageSize:number,currentPage:number) =>{
        return   async (dispatch:any) => {
            dispatch (setIsFetching(true))
            let data = await usersAPI.getUsers(pageSize,currentPage)
                
                dispatch (changePageOnClick(currentPage))
                  dispatch (setUsersOnClick(data.items))
                  dispatch (setUsersCount(data.totalCount))
                  dispatch (setIsFetching(false))
               
        }
    }

    const followUnfollowSuccessFlow = async (dispatch:any,userId:number,apiMethod:any,actionCreator:any) =>{
        dispatch( setFollowProgress(true,userId))
        let data = await apiMethod(userId)
            if(data.resultCode===0){
                dispatch( actionCreator(userId));
                
          }
          dispatch( setFollowProgress(false,userId))
    }
    export const followSuccess = (userId:number) =>{
        return  async (dispatch:any) => {
            let apiMethod = usersAPI.followUser.bind(usersAPI)
            let actionCreator = followOnClick
            followUnfollowSuccessFlow(dispatch,userId,apiMethod,actionCreator)
              
          
        }
    }
    export const unfollowSuccess = (userId:number) =>{
        return async (dispatch:any) => {
            let apiMethod = usersAPI.unfollowUser.bind(usersAPI)
            let actionCreator = unFollowOnClick
            followUnfollowSuccessFlow(dispatch,userId,apiMethod,actionCreator)  
                              
                          
        }
    }

    

