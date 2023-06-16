import { createSelector } from "reselect"

export const selectorGetUsers =(state)=>{
    return state.usersPage.users
}
export const getUsersSuperSelector = createSelector(selectorGetUsers,(users)=> users.filter(u=>true));
export const getTotalUsersCount =(state)=>{
    return state.usersPage.totalUsersCount
}
export const getPageSize =(state)=>{
    return state.usersPage.pageSize
}
export const getCurrentPage =(state)=>{
    return state.usersPage.currentPage
}
export const getIsFetching =(state)=>{
    return state.usersPage.isFetching
}
export const getFollowInProgress =(state)=>{
    return state.usersPage.followInProgress
}
