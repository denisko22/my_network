import { applyMiddleware, combineReducers, legacy_createStore as createStore, compose  } from "redux";
import DialogsReducer from "./dialogs-reducer";
import ProfileReducer from "./profile-reducer";
import SidebarReducer from "./sidebar-reducer";
import { UsersReducer } from "./users-reducer";
import appReducer from "./app-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from "redux-form";

let reducers = combineReducers(
    {
        dialogs:DialogsReducer,
        myPosts:ProfileReducer,
        sidebar:SidebarReducer,
        usersPage:UsersReducer,
        auth:authReducer,
        form: formReducer,
        app:appReducer
    }
    );
  
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducers,  /* preloadedState, */ composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store;
