const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let initialState = {
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
    messageText: ''
}

let dialogsPageReduce = (state = initialState, action) => {
    switch (action.type) {

        case SEND_MESSAGE:
            let message = { id: 5, message: state.messageText };
            return {
                ...state,
                messagesData: [...state.messagesData, message],
                messageText: ''
            }

        case UPDATE_MESSAGE_TEXT:
            return {
                ...state,
                messageText: action.changedText
            }
            
        default:
            return state;
    }
}

export let sendMessage = () => ({ type: SEND_MESSAGE });
export let updateTextField = (newText) => ({ type: UPDATE_MESSAGE_TEXT, changedText: newText });

export default dialogsPageReduce;