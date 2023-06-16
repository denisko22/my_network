import React from 'react';
import withAuthRedirect from '../hoc/withAuthRedirect';

import { connect } from "react-redux";
import Users from "./users";
import {  getUsers,followSuccess,unfollowSuccess } from "../../redux/users-reducer";
import Preloader from '../common/preloader/preloader';
import { compose } from 'redux';
import { getCurrentPage, getFollowInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsersSuperSelector, selectorGetUsers } from '../../redux/users-selector';

class UsersAPIComponent extends React.Component  {
  
  componentDidMount(){
    const {pageSize,currentPage}= this.props
    this.props.getUsers(pageSize,currentPage);
  //   usersAPI.getUsers(this.props.pageSize,this.props.currentPage).then(data =>{
  //   this.props.setIsFetching(false);
    
  //     this.props.setUsersOnClick(data.items)
  //     this.props.setUsersCount(data.totalCount)
  //  }
  //  )
    }; 
  setPageClick = (pageNum) =>{
    const pageSize = this.props
    this.props.getUsers(pageSize,pageNum);
    // this.props.setIsFetching(true);
    //   this.props.changePageOnClick(pageNum)
      // usersAPI.getUsers(this.props.pageSize,pageNum).then(data =>{
      //   this.props.setIsFetching(false);
        
      //     this.props.setUsersOnClick(data.items)
      // })

      // axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`, {withCredentials:true}).then(response=>{
      //   this.props.setIsFetching(false);
      //     this.props.setUsersOnClick(response.data.items)
          
      // })
  }
  render (){
       
      return<>
      {this.props.isFetching ? <Preloader/> : null}
      <Users 
       totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        
         currentPage={this.props.currentPage}
         setPageClick={this.setPageClick}
        
         users={this.props.users}
         
         followInProgress={this.props.followInProgress}
         follow = {this.props.followSuccess}
         unfollow={this.props.unfollowSuccess}
         /></>
  }
}

  let mapStateToProps = (state) =>{
    console.log('hi');
      return{
          // users:  selectorGetUsers(state),
          users:  getUsersSuperSelector(state),
          totalUsersCount: getTotalUsersCount(state),
          pageSize:getPageSize(state),
          currentPage: getCurrentPage(state),
          isFetching: getIsFetching(state),
          followInProgress: getFollowInProgress(state),
      }
    }
   export default compose(connect(mapStateToProps,{
    
    getUsers,
    followSuccess,
    unfollowSuccess
}),withAuthRedirect,)(UsersAPIComponent);
 