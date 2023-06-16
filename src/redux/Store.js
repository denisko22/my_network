
import SidebarReducer from "./sidebar-reducer.js";
import ProfileReducer from "./profile-reducer.js";
import DialogsReducer from "./dialogs-reducer.js";  
    function Rander () {
      return Math.floor(Math.random() * 1001);
    }
    
    
 
    export let store ={
      RerenderEntireTree  (){
      
      },
      _state : {
        randlikes: Rander,
        
        sidebar:{
          friends:[
        {id:3, name:'Slavik'},
        {id:4, name:'Diana 14.1'},
        {id:5, name:'Nazar'},
        
          ]
        },
        dialogs:{
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
          newMessageDataText:'',
        },
        myPosts:{
          messageText:[
            { id: 1, text: "Hello, my name is Gustavo" },
            { id: 2, text: "But you can call me Gus" },
            { id: 3, text: "I'm the CEO of Los Pollos Hermanos" },
            { id: 4, text: "And your personal waiter)" }
  
          ],
          newMessageText:''
        }
       
      },
      getState (){
        return this._state;
      },
      
     dispatch(action){
  
    ProfileReducer(this._state.myPosts ,action);
       DialogsReducer( this._state.dialogs , action);
       SidebarReducer(this._state.sidebar , action);
       this.RerenderEntireTree(this._state)
     } 
     , 
    
       subscribe  (observer)  {
       this.RerenderEntireTree = observer;
     },
   }
  
   
  window.state = store._state;

    export default store._state;