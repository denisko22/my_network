import React from "react"
import s from "./formsControl.module.css"
import { Field, WrappedFieldMetaProps, WrappedFieldProps } from "redux-form"
import { FieldValidatorsType } from "../../../utils/validators/validators"
import { LoginFormValuesTypeKeys } from "../../login/login"
type FormControlParamType={
    meta:WrappedFieldMetaProps
    
    children:React.ReactNode
    input:any
}
type FormControlType =(params:FormControlParamType)=>React.ReactNode
const FormControl:FormControlType = ({input, meta, ...props}) =>{
//const FormControl:FormControlType = ({input, meta,child, ...props}) =>{
    const hasError = meta.touched && meta.error;
    return(
        <div >
            <div className={hasError ? s.error :''}>
                {props.children }
                </div>
            {hasError && <div ><span>{meta.error}</span></div>}
        </div>
    )
}
// export const Textarea = ({input, meta, ...props}) => {
//     const hasError = meta.touched && meta.error;
//     return(
//         <div>
//             <div ><textarea {...input} {...props}  className={hasError ? s.error :''}></textarea></div>
//             {hasError && <div ><span>{meta.error}</span></div>}
//         </div>
//     )
// }
// export const Input = ({input, meta, ...props}) => {
//     const hasError = meta.touched && meta.error;
//     return(
//         <div>
//             <div ><input {...input} {...props}  className={hasError ? s.error :''}/></div>
//             {hasError && <div ><span>{meta.error}</span></div>}
//         </div>
//     )
// }
export const Textarea:React.FC<WrappedFieldProps> = (props) => {
    //const {input, meta,child, ...restProps} = props;
    const {input, meta, ...restProps} = props;
   
    return <FormControl {...props}><textarea {...input} {...restProps}  ></textarea></FormControl>
           
}
export const Input:React.FC<WrappedFieldProps> = (props) => {
    
    //const {input, meta,child, ...restProps} = props;
    const {input, meta, ...restProps} = props;
    return(
        
        <FormControl {...props}> <input {...input} {...restProps}  /></FormControl>

    )
}

export function createField<FormKeysType extends string>  (placeholder:string | undefined,name:FormKeysType,component:React.Component,validators:Array<FieldValidatorsType>, props = {},text = '') {
    return<div>
    <Field  placeholder={placeholder} name={name} component={component} validate={validators} 
    {...props}/> {text} 
    
    </div>
}