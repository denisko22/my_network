import { createSelector } from "reselect"
import { AppStateType } from "./redux-store";

export const selectorGetUsers =(state:AppStateType)=>{
    return state.usersPage.users
}
export const getUsersSuperSelector = createSelector(selectorGetUsers,(users)=> users.filter(()=>true));
export const getTotalUsersCount =(state:AppStateType)=>{
    return state.usersPage.totalUsersCount
}
export const getPageSize =(state:AppStateType)=>{
    return state.usersPage.pageSize
}
export const getCurrentPage =(state:AppStateType)=>{
    return state.usersPage.currentPage
}
export const getIsFetching =(state:AppStateType)=>{
    return state.usersPage.isFetching
}
export const getFollowInProgress =(state:AppStateType)=>{
    return state.usersPage.followInProgress
}
