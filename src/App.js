import React from "react";
import {  Route, Routes } from "react-router-dom";
import './App.css';
import ContentContainer, { withRouter } from "./components/Content/contentContainer";
import Help from "./components/help/help";
import Music from "./components/Music/music";
import Nav from './components/Navbar/nav_bar';
import News from "./components/News/news";
import Settings from "./components/Settings/settings";
import DialogsContainer from "./components/Dialogs/dialogsContainer";
import UsersContainer from "./components/Users/usersContainer";
import HeaderContainer from "./components/Header/headerContainer";
import Login from "./components/login/login";
import { connect } from "react-redux";
import { compose } from "redux";
import  store  from './redux/redux-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { initialize } from "./redux/app-reducer";
import Preloader from "./components/common/preloader/preloader";
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
        <Routes>
          <Route path="/Dialogs/*" element={<DialogsContainer />} />
          <Route path="/Profile/:userId?" element={<ContentContainer />} />
          <Route path="/News/*" element={<News />} />
          <Route path="/Music/*" element={<Music />} />
          <Route path="/Settings/*" element={<Settings />} />
          <Route path="/Help/*" element={<Help />} />
          <Route path="/Users/*" element={<UsersContainer />} />
          <Route path="/Login/*" element={<Login />} />


        </Routes>
      </div>

    </div>
  );
}}
const mapStateToProps =(state)=>({
    initialized:state.app.initialized
})
export default compose (withRouter,connect(mapStateToProps, {initialize})) (App);


let AppContainer = (props) => {
  compose (withRouter,connect(mapStateToProps, {initialize})) (App);
}
const TddApp = (props) =>{
  return (
  <React.StrictMode>
    <BrowserRouter>
    <Provider store = {store}>
    <AppContainer />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
  )
}

