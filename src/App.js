import React, { Suspense } from "react";
import {  Route, Routes } from "react-router-dom";
import './App.css';
import  { withRouter } from "./components/Content/contentContainer";
import Help from "./components/help/help";
import Music from "./components/Music/music";
import Nav from './components/Navbar/nav_bar';
import News from "./components/News/news";
import Settings from "./components/Settings/settings";
// import DialogsContainer from "./components/Dialogs/dialogsContainer";
// import UsersContainer from "./components/Users/usersContainer";
// import Login from "./components/login/login";
import HeaderContainer from "./components/Header/headerContainer";
import { connect } from "react-redux";
import { lazy } from "react";
import { compose } from "redux";
import  store  from './redux/redux-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { initialize } from "./redux/app-reducer";
import Preloader from "./components/common/preloader/preloader";

const UsersContainer =  lazy(()=> import("./components/Users/usersContainer"));
const ContentContainer =  lazy(()=> import("./components/Content/contentContainer"));
const Login =  lazy(()=> import("./components/login/login"));
const DialogsContainer =  lazy(()=> import('./components/Dialogs/dialogsContainer'));

class App extends React.Component {
  componentDidMount(){
    this.props.initialize()

   }
render(){
  if(!this.props.initialized){
    return <Preloader/>
  }
  return (

    <div className='app_wrapper'>
      <HeaderContainer />
      <Nav />
      {/* friendsData={props.appState.sidebar.friends} */}
      <div className="app_wrap_content _wrapper">
      
      <Suspense fallback={<div><Preloader /></div>}>
        <Routes>
        <Route path="/Dialogs/*" element={<DialogsContainer/>} />
          <Route path="/Profile/:userId?" element={<ContentContainer />} />
          <Route path="/News/*" element={<News />} />
          <Route path="/Music/*" element={<Music />} />
          <Route path="/Settings/*" element={<Settings />} />
          <Route path="/Help/*" element={<Help />} />
          <Route path="/Users/*" element={<UsersContainer />} />
          <Route path="/Login/*" element={<Login />} />


        </Routes>
        </Suspense>
      </div>

    </div>
  );
}}
const mapStateToProps =(state)=>({
    initialized:state.app.initialized
})
export default compose (withRouter,connect(mapStateToProps, {initialize})) (App);


// let AppContainer = (props) => {
//   compose (withRouter,connect(mapStateToProps, {initialize})) (App);
// }
// const TddApp = (props) =>{
//   return (
//   <React.StrictMode>
//     <BrowserRouter>
//     <Provider store = {store}>
//     <AppContainer />
//     </Provider>
//     </BrowserRouter>
//   </React.StrictMode>
//   )
// }

