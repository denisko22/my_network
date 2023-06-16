import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../common/FormsControl/formsControl";
import { requiredField,maxLengthCreator  } from "../../../utils/validators/validators";
import style from "../dialogs.module.css";
import React from "react";
const AddMessageForm = (props)=>{
    return(
<form className={style.dialogwindow} onSubmit={props.handleSubmit}>
    <Field component={Textarea} name='newMessageDataText' validate={[requiredField,maxLengthCreator(50)]} ></Field>
                {/* <textarea onChange = {messageOnChange} ref={windowMessageText} value={props.newMessageDataText}></textarea> */}
                <Field component={'button'}  className={style.sendButton}>Send</Field>
            </form>
    )
}
export default reduxForm({
    form:'dialogAddMessageForm'
})(AddMessageForm);