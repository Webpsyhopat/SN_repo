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

            /* addPosts: function () {
                this.postsData.push(
                    {
                        id: 5,
                        text: this.postText,
                    }
                );
                this.postTextUpdate('');
                RenderEntireTree(state);
            },
            postTextUpdate: function (changedText) {
                this.postText = changedText;
                RenderEntireTree(state);
            }, */
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
            /* addMessages: function () {
                this.messagesData.push(
                    {
                        id: 5,
                        message: this.messageText,
                    }
                );
                this.messageTextUpdate('');
                RenderEntireTree(state);
            },
            messageTextUpdate: function (changedText) {
                this.messageText = changedText;
                RenderEntireTree(state);
            },
            messageText: '', */
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
        this.state.dialogsPage = dialogsPageReduce(action, this.state.dialogsPage);
        this.state.profilePage = profilePageReduce(action, this.state.profilePage);
        this.state.sidebarBlocksData = sidebarBlocksDataReduce(action, this.state.sidebarBlocksData);
        RenderEntireTree(store);
    }
}

let RenderEntireTree;
export const poh = (observer) => {
    RenderEntireTree = observer;
}

export default store;