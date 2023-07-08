import { applyMiddleware, combineReducers, legacy_createStore as createStore, compose  } from "redux";
import DialogsReducer from "./dialogs-reducer"
import ProfileReducer from "./profile-reducer"
import SidebarReducer from "./sidebar-reducer"
import { UsersReducer } from "./users-reducer"
import appReducer from "./app-reducer"
import authReducer from "./auth-reducer"
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from "redux-form"

let rootReducers = combineReducers(
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
  
    type RootReducersType = typeof rootReducers
    export type AppStateType = ReturnType<RootReducersType>

    let state:AppStateType

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
let store = createStore(rootReducers,  /* preloadedState, */ composeEnhancers(applyMiddleware(thunkMiddleware)))
//@ts-ignore
window.__store__ = store
export default store
