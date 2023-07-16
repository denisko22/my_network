export type FieldValidatorsType = (value:string) => string |undefined 
    
    export const requiredField:FieldValidatorsType = (value) =>{
        if (value) return undefined

        return 'Field is required'
    };

    export const maxLengthCreator = (maxLength:number):FieldValidatorsType => (value) =>{
        if(value.length > maxLength){
            return `max length of field is ${maxLength}`
        }
        return undefined
    }

