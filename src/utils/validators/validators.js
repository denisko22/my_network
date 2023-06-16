    import { Field } from "redux-form";
    
    export const requiredField = value =>{
        if (value) return undefined

        return 'Field is required'
    };

    export const maxLengthCreator = (maxLength) => (value) =>{
        if(value.length > maxLength){
            return `max length of field is ${maxLength}`
        }
        return undefined
    }

//     export const createField = (placeholder,name,component,validators) =>{
//          <Field  placeholder={placeholder} name={name} component={component} validate={validators}/>
// }