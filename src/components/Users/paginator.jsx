import s from "./users.module.css"
import React from "react";


const Paginator =(totalUsersCount,pageSize,currentPage,setPageClick)=> {let pagesCount = Math.ceil(totalUsersCount / pageSize);
let pages = [];
for(let i = 1; i <= pagesCount; i++){
        pages.push(i);
}
let curP = currentPage;

let curPF = ((curP - 5) < 0) ?  0  : curP - 5 ;

let curPL = curP + 5;

let slicedPages = pages.slice( curPF, curPL);

 return <div >
      
        {
        slicedPages.map(p =>{
            return  <span key={p} className={currentPage === p ? s.page + ' ' + s.selectedPage : s.page} onClick={(e)=>setPageClick(p)} >{p} </span>
            })}
        </div>
        
}
export default Paginator;