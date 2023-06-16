
import { applyData } from "./auth-reducer";
let SET_INITIALIZED = 'app/SET_INITIALIZED';

let initialState = {
    initialized:false
    
};
// [{id:1, imgUrl:'https://static.vecteezy.com/system/resources/previews/007/576/295/non_2x/stop-killing-time-vector.jpg', fullName:'Denis',location:{country:'Ukraine',city:'Drohobych'},followed:true, status:'Heeeey bro!'},
//     {id:2, imgUrl:'https://static.vecteezy.com/system/resources/previews/007/576/295/non_2x/stop-killing-time-vector.jpg', fullName:'Anna',location:{country:'Ukraine',city:'kyiv'},followed:false, status:'netflix and chill?;)'},
//     {id:3, imgUrl:'https://static.vecteezy.com/system/resources/previews/007/576/295/non_2x/stop-killing-time-vector.jpg', fullName:'Slavik',location:{country:'Germany',city:'mannheim'},followed:true, status:'i need 5 mil total of rockets!'},
//     {id:4, imgUrl:'https://static.vecteezy.com/system/resources/previews/007/576/295/non_2x/stop-killing-time-vector.jpg', fullName:'Nazir',location:{country:'Ukraine',city:'Lviv'},followed:true, status:'mashallah'}]
export const appReducer = (state=initialState, action) => {
    
    switch (action.type) {
        case SET_INITIALIZED:    
            return{...state,
               initialized:true
               
            };
                default: return state
        
        
    }
}
export let initializedSuccess =()=>({type:SET_INITIALIZED})
export const initialize = () => {
    return async (dispatch)=>{
        let promise = await dispatch(applyData())
        Promise.all([promise])
        
            dispatch(initializedSuccess())
        
        
    }
}

export default appReducer;
