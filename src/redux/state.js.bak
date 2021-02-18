import dialogsPageReduce from "./dialogsPageReducer";
import profilePageReduce from "./profilePageReducer";
import sidebarBlocksDataReduce from "./sidebarBlocksDataReducer";

let store = {
    state: {
        profilePage: {
            postsData: [
                { id: 1, text: 'WoW, Wow. My first post!' },
                { id: 2, text: 'Hi there! I am new here.' },
                { id: 3, text: 'Blah Blah Blah' },
                { id: 4, text: 'Итить-колотить. Напишите мне кто-нибудь' },
            ],
            postText: '',

        },
        dialogsPage: {
            dialogsData: [
                { name: 'Kent', id: 1 },
                { name: 'Vanya', id: 2 },
                { name: 'Petya', id: 3 },
                { name: 'Glasha', id: 4 },
                { name: 'Masha', id: 5 },
                { name: 'Pasha', id: 6 },
            ],
            messagesData: [
                { id: 1, message: 'Hi there!' },
                { id: 2, message: 'How Are You?' },
                { id: 3, message: "Let's speak about something" },
                { id: 4, message: 'Why are You so quite?' },
            ],
        },
        sidebarBlocksData: {
            friendsOnline: [
                { name: 'Chmo', id: 1 },
                { name: 'Olen', id: 2 },
                { name: 'Petro Petrovich', id: 3 },
            ],
        },
    },
    dispatch: function (action) {
        this.state.dialogsPage = dialogsPageReduce(this.state.dialogsPage, action);
        this.state.profilePage = profilePageReduce(this.state.profilePage, action);
        this.state.sidebarBlocksData = sidebarBlocksDataReduce(this.state.sidebarBlocksData, action);
        RenderEntireTree(store);
    }
}

let RenderEntireTree;
export const poh = (observer) => {
    RenderEntireTree = observer;
}

export default store;