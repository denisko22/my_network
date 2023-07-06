
let initialState = {friends:[
    {id:3, name:'Slavik'},
    {id:4, name:'Diana 14.1'},
    {id:5, name:'Nazar'},
    
      ]};
type InitialStateType =typeof initialState
const SidebarReducer =(state=initialState,action:any)=>{
return state
}
export default SidebarReducer;