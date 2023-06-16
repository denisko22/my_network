
import Posts from './MyPosts'
import { addPostActionCreator } from "../../../redux/profile-reducer";
// import { newPostTextActionCreator } from "../../../redux/profile-reducer";

import { connect } from "react-redux";


 
// const PostsContainer = (props) => {
//   return <StoreContext.Consumer>
//     {(store)=>{
//   let textOnChange = (text) => {
    
   
//     store.dispatch(newPostTextActionCreator(text))
//   };
//   let myPosts = store.getState().myPosts;
//   let onAddPost = () => 
//   { store.dispatch(addPostActionCreator())}
 
//   return <Post newPostText = {textOnChange} addPost = {onAddPost}
//      messageText = {myPosts.messageText} newMessageText = {myPosts.newMessageText} />}}
//      </StoreContext.Consumer>
// };
let mapStateToProps= (state)=>{
  return{
    messageText: state.myPosts.messageText ,
    // newMessageText: state.myPosts.newMessageText
    
  }
  
}
let mapDispatchToProps=(dispatch)=>{ 
  return{
    // newPostText: (text) =>{dispatch(newPostTextActionCreator(text))},
    addPost: (newMessageText) =>{dispatch(addPostActionCreator(newMessageText))}
  }
}

const PostsContainer= connect(mapStateToProps,mapDispatchToProps,)(Posts);
export default PostsContainer;