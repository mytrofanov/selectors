import {combineReducers, createStore} from "redux";
import MessageReducer from "./MessageReducer";

let reducers = combineReducers({
    MessagePage: MessageReducer
})

let store = createStore(reducers)

export default store;