import userDataReduce from "./userDataReducer";
const { default: usersPageReduce } = require("./usersPageReducer");
const { createStore, combineReducers } = require("redux");
const { default: dialogsPageReduce } = require("./dialogsPageReducer");
const { default: profilePageReduce } = require("./profilePageReducer");
const { default: sidebarBlocksDataReduce } = require("./sidebarBlocksDataReducer");

let reducers = combineReducers(
    {
        profilePage: profilePageReduce,
        dialogsPage: dialogsPageReduce,
        sidebarBlocksData: sidebarBlocksDataReduce,
        usersPage: usersPageReduce,
        userData: userDataReduce,
    }
)
let store = createStore(reducers);

export default store;