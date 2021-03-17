import {combineReducers, createStore} from "redux";
import {profileReduser} from "./Profile-reduser";
import {dialogsReduser} from "./Dialogs-reduser";
import {sidebarReduser} from "./Sidebar-reduser";

let redusers = combineReducers(
    {
        profilePage: profileReduser,
        dialogsPage: dialogsReduser,
        sidebar: sidebarReduser
    }
)

let store = createStore(redusers)

export default store