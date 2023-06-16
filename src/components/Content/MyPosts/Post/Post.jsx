import React from "react";
import style from './Post.module.css';
const Post = (props) => {
  return (
    <div  className={style.content__post}>
      <img src="https://static.vecteezy.com/system/resources/previews/007/576/295/non_2x/stop-killing-time-vector.jpg" alt='wtf' ></img>

      <div className={style.post_text}>{props.post}</div>
      <div className={style.like_count}> 999 likes</div>
      </div>

  )
};
export default Post;