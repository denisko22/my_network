
// import state from './redux/State';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import  store  from './redux/redux-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// import { addPost } from './redux/State';
// import { newPostText } from './redux/State';
// import { subscribe } from './redux/State';
// appState={store.state} addPost={store.addPost} newPostText={store.newPostText}
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(    
  // <TddApp/>
  <React.StrictMode>
    <BrowserRouter>
    <Provider store = {store}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
)





