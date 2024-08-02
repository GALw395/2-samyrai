import { combineReducers, createStore } from "redux";
import { profileReducer } from "./profile-reducer";
import { dialogsReducer } from "./dialogs-reducer";

let reducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})
export let store = createStore(reducer)