const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let dialogsPageReduce = (action, state) => {
    switch (action.type) {
        case SEND_MESSAGE:
            state.messagesData.push(
                {
                    id: 5,
                    message: state.messageText,
                }
            );
            state.messageText = '';
            return state;
        case UPDATE_MESSAGE_TEXT:
            state.messageText = action.changedText;
            return state;
        default:
            return state;
    }
}

export let sendMessageCreator = () => ({type : SEND_MESSAGE});
export let updateMessageTextCreator = (newText) => ({type : UPDATE_MESSAGE_TEXT, changedText : newText });

export default dialogsPageReduce;