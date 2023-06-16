
import { addMessageActionCreator } from "../../redux/dialogs-reducer";

import Dialogs from "./dialogs";
import withAuthRedirect from "../hoc/withAuthRedirect";
import { compose } from "redux";
import { connect } from "react-redux";

// const DialogsContainer = (props) => {

    
//  return <StoreContext.Consumer>
//     { (store)=>{
//             let messageOnChange = (text) =>{
        
//                 store.dispatch(newMessageDataTextActionCreator(text));
//             };
//             let addPostOnClick =()=>{
//                 store.dispatch(addMessageActionCreator())
//             };
            
//             let state = store.getState();
           
//         return <Dialogs addPostOnClick ={addPostOnClick} messageOnChange={messageOnChange}
//         usersData={state.dialogs.usersData}
//         messagesData={state.dialogs.messagesData}
//         newMessageDataText={state.dialogs.newMessageDataText}
//         />
//         }
//         }
//         </StoreContext.Consumer>
    
// }
let mapDispatchToProps = (dispatch) =>{
    return{
        addPostOnClick :(newMessageDataText)=>{dispatch(addMessageActionCreator(newMessageDataText))},
    
         
    }
   }
   let mapStateToProps = (state) =>{
    return{usersData:state.dialogs.usersData,
        messagesData:state.dialogs.messagesData,
      
        
    }
   }
   export default compose(connect(mapStateToProps,mapDispatchToProps),
   withAuthRedirect)
   (Dialogs);
//    let authRedirectComponent = withAuthRedirect(Dialogs)

// const DialogsContainer =  connect(mapStateToProps,mapDispatchToProps)(authRedirectComponent);

// export default DialogsContainer;