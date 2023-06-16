import style from "./dialogs.module.css";
import React from "react";
import ChatItem from "./chat_item/chat_item";
import Message from "./Message/message";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../common/FormsControl/formsControl";
import { requiredField,maxLengthCreator  } from "../../utils/validators/validators";
import  AddMessageFormRedux  from "./AddMessageForm/addMessageForm";

const Dialogs = (props) => {
   
    
    let newUsersData = props.usersData.map( data=> <ChatItem name = {data.name} key = {data.id} chat_num = {data.id} />);
    let newMessagesData = props.messagesData.map(text => <Message text={text.message} key = {text.id}></Message>);
    
   let addNewMessage = (formData) =>{
    props.addPostOnClick(formData.newMessageDataText);

   }
    return(
        
        <div className={style.dialogs}>

            <div className={style.chatlist}>
        <div className={style.title}>Dialogs</div>
        
        {newUsersData}
            </div>
            <div className={style.chat}>
            {newMessagesData}
            <AddMessageFormRedux onSubmit={addNewMessage}/>
            
            </div>
        </div>
    ) 
};
// const AddMessageForm = (props)=>{
//     return(
// <form className={style.dialogwindow} onSubmit={props.handleSubmit}>
//     <Field component={Textarea} name='newMessageDataText' validate={[requiredField,maxLengthCreator(50)]} ></Field>
//                 {/* <textarea onChange = {messageOnChange} ref={windowMessageText} value={props.newMessageDataText}></textarea> */}
//                 <Field component={'button'}  className={style.sendButton}>Send</Field>
//             </form>
//     )
// }
// const AddMessageFormRedux = reduxForm({
//     form:'dialogAddMessageForm'
// })(AddMessageForm);
export default Dialogs;