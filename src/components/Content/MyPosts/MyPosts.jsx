import React, { PureComponent } from "react";
import style from './MyPosts.module.css';
import Post from "./Post/Post"
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, requiredField } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControl/formsControl";
// import { addPostActionCreator } from "../../../redux/profile-reducer";
// import { newPostTextActionCreator } from "../../../redux/profile-reducer";

let textOfPst= React.createRef();


const Posts  = React.memo((props) =>  {
  console.log('mamamia');
  // let textOnChange = () => {
  //   props.newPostText(textOfPst.current.value);
  //   // props.store.dispatch(newPostTextActionCreator(textOfPst.current.value))
  // };

  let AddPost = (formData) => 
  {
    props.addPost(formData.newMessageText);
    // props.store.dispatch(addPostActionCreator())
  }
  
  let newMessageText =  props.messageText.map(postTxt => <Post post={postTxt.text} key = {postTxt.id}  />);
 
  return (<div className={style.content__posts}>
    <h3>my posts</h3>
    <div className={style.content__posts_new}>
      Write a new post
      <AddPostFormRedux onSubmit={AddPost}/>
    </div>
    {newMessageText}
  </div>)
});
// class Posts extends PureComponent  {

  
//   // shouldComponentUpdate(nextProps,nextState){  return nextProps == this.props}
//   render(){
//   console.log('mamamia');
//   // let textOnChange = () => {
//   //   props.newPostText(textOfPst.current.value);
//   //   // props.store.dispatch(newPostTextActionCreator(textOfPst.current.value))
//   // };
//   let AddPost = (formData) => 
//   {
//     this.props.addPost(formData.newMessageText);
//     // props.store.dispatch(addPostActionCreator())
//   }
  
//   let newMessageText =  this.props.messageText.map(postTxt => <Post post={postTxt.text} key = {postTxt.id}  />);
 
//   return (<div className={style.content__posts}>
//     <h3>my posts</h3>
//     <div className={style.content__posts_new}>
//       Write a new post
//       <AddPostFormRedux onSubmit={AddPost}/>
//     </div>
//     {newMessageText}
//   </div>)
// }};



const AddPostForm = (props) =>{
  return(
  
      <form className={style.new_post_form} onSubmit={props.handleSubmit}>
        <Field component={Textarea} name="newMessageText"  placeholder='Write text here...' validate={[requiredField,maxLengthCreator(255)]} ></Field>
        
        <Field component={'button'} name="btn" className={style.button_send}  
        >Add</Field>
      </form>
      )
}
const AddPostFormRedux = reduxForm({
  form:'addPostForm'
})(AddPostForm);
export default Posts;