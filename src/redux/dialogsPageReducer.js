const SEND_MESSAGE = 'SEND-MESSAGE';

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
    ]
}

let dialogsPageReduce = (state = initialState, action) => {
    switch (action.type) {

        case SEND_MESSAGE:
            let message = { id: 5, message: action.newMessageText };
            return {
                ...state,
                messagesData: [...state.messagesData, message]
            }
            
        default:
            return state;
    }
}

export let sendMessage = (newMessageText) => ({ type: SEND_MESSAGE, newMessageText });

export default dialogsPageReduce;