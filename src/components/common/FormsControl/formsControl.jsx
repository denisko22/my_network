import React from "react"
import s from "./formsControl.module.css"

const FormControl = ({input, meta,child, ...props}) =>{
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
export const Textarea = (props) => {
    const {input, meta,child, ...restProps} = props;
   
    return <FormControl {...props}><textarea {...input} {...restProps}  ></textarea></FormControl>
           
}
export const Input = (props) => {
    
    const {input, meta,child, ...restProps} = props;
    return(
        
        <FormControl {...props}> <input {...input} {...restProps}  /></FormControl>

    )
}
