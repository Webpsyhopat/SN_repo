import userDataReduce from "./userDataReducer";
const { default: usersPageReduce } = require("./usersPageReducer");
const { createStore, combineReducers, applyMiddleware } = require("redux");
const { default: dialogsPageReduce } = require("./dialogsPageReducer");
const { default: profilePageReduce } = require("./profilePageReducer");
const { default: sidebarBlocksDataReduce } = require("./sidebarBlocksDataReducer");
const { default: thunkMiddleware} = require ("redux-thunk");

let reducers = combineReducers(
    {
        profilePage: profilePageReduce,
        dialogsPage: dialogsPageReduce,
        sidebarBlocksData: sidebarBlocksDataReduce,
        usersPage: usersPageReduce,
        userData: userDataReduce,
    }
)
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;