let NEW_MESSAGE_DATA_TEXT ='NEW-MESSAGE-DATA-TEXT';
let ADD_MESSAGE = 'dialogs/ADD-MESSAGE';
let initialState = {
  usersData:[
    {id:1, name:'Denis'},
    {id:2, name:'Pablo'},
    {id:3,name:'Slavik'},
    {id:4, name:'Diana'},
    {id:5, name:'Nazar'},
    {id:6, name:'Sonia'},
    {id:7, name:'Andryi'},
    {id:8, name:'Roman'},
    {id:9, name:'Sasha'}

      ],
  messagesData:[    
  {id:1, message:'Hi!'},
  {id:2, message:'Yo'},
  {id:3,message:"what's good?"},
  {id:4, message:'all good'},
  {id:5, message:"how u been livin' all this time?"},
  {id:6, message:"i was in trouble last week for my debt, but now it's ok"},
  {id:7, message:'damn...'},
  {id:8, message:'i know'}

],
}
let DialogsReducer =(state = initialState,action)=>{
 
   switch (action.type) {
    case ADD_MESSAGE:
        let newMessage={
          id: state.messagesData.length+1,
          message:action.newMessageDataText 
        }
        return {...state,
            
          messagesData:[...state.messagesData,newMessage]
        };
       

        default:return state;
      }
    
    }
    
    export let addMessageActionCreator =(newMessageDataText)=>({type: ADD_MESSAGE, newMessageDataText:newMessageDataText})
    export default DialogsReducer;