
import { NavLink } from "react-router-dom";
import s from "./users.module.css"
import React from "react";


{/* <span className={s.page + ' ' + s.selectedPage}>1 </span>
       <span className={s.page}>2 </span>
       <span className={s.page}>3 </span>
       <span className={s.page}>4 </span>
       <span className={s.page}>5 </span> */}
   let Users = (props) =>{
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for(let i = 1; i <= pagesCount; i++){
            pages.push(i);
    }
    let curP = props.currentPage;

let curPF = ((curP - 5) < 0) ?  0  : curP - 5 ;

let curPL = curP + 5;

    let slicedPages = pages.slice( curPF, curPL);
   
   return<div>
        
       <div>
      
        {
        slicedPages.map(p =>{
            return <span key={p} className={props.currentPage === p ? s.page + ' ' + s.selectedPage : s.page} onClick={(e)=>props.setPageClick(p)} >{p} </span>
            })}
        </div>
        {
        
        props.users.map(u=>
            <div className={s.infoBody} key = {u.id}>
                
                <span>
                    <div>
                       <NavLink to={'/Profile/' + u.id}><img src={u.photos.small != null ? u.photos.small : 
                            'https://static.vecteezy.com/system/resources/previews/007/576/295/non_2x/stop-killing-time-vector.jpg'} alt="lolers" className={s.photo} /></NavLink>
                    </div>
                    <div>
                        { u.followed ? <button disabled={props.followInProgress.some(id => id === u.id)}  onClick={()=>{
                       props.unfollow(u.id)
                       //     props.setFollowProgress(true,u.id)
                            
                        //     usersAPI.unfollowUser(u.id).then(data=>{
                        //         if(data.resultCode===0){
                        //             props.unFollowOnClick(u.id);
                                    
                        //       }
                        //       props.setFollowProgress(false,u.id)
                              
                        //   })
                          
                        }} >unfollow</button> : <button disabled={props.followInProgress.some(id => id === u.id)    } onClick={()=>{
                            props.follow(u.id)
                            //     props.setFollowProgress(true,u.id)
                        //     usersAPI.followUser(u.id).then(data=>{
                        //         if(data.resultCode===0){
                        //             props.followOnClick(u.id);
                                    
                        //       }
                        //       props.setFollowProgress(false,u.id)
                              
                        //   })
                        }}>follow</button>}
                    </div>
                    <span>
                    <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                    </span>
                    <span className={s.location}>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                    </span>
                </span>
                </div>
            )
        }</div>
    }

export default Users;