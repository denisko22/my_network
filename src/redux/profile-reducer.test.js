import ProfileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

let state = { messageText:[
  { id: 1, text: "Hello, my name is Gustavo" },
  { id: 2, text: "But you can call me Gus" },
  { id: 3, text: "I'm the CEO of Los Pollos Hermanos" },
  { id: 4, text: "And your personal waiter)" }
]}

test('new post should be added', () => {
  // 1. test data
  let action  = addPostActionCreator('loler')
 
  // 2. action
  let newState = ProfileReducer(state,action)
  // 3. expected
  expect(newState.messageText.length).toBe(5)
  
 
});

test('new post should be with given text', () => {
  // 1. test data
  let action  = addPostActionCreator('loler')
 
  // 2. action
  let newState = ProfileReducer(state,action)
  // 3. expected
  
  expect(newState.messageText[4].text).toBe('loler')
 
});

test('post should be deleted',()=>{
 // 1. test data
 let action  = deletePost(1)
 
 // 2. action
 let newState = ProfileReducer(state,action)
 // 3. expected
 expect(newState.messageText.length).toBe(4)
})
    