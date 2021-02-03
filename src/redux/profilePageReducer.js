const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

let initialState = {
    postsData: [
        { id: 1, text: 'WoW, Wow. My first post!' },
        { id: 2, text: 'Hi there! I am new here.' },
        { id: 3, text: 'Blah Blah Blah' },
        { id: 4, text: 'Итить-колотить. Напишите мне кто-нибудь' },
    ],
    postText: '',
}

let profilePageReduce = (state = initialState, action) => {
switch(action.type){
    case ADD_POST :
        let post = state.postText;
       return {
           ...state,
           postsData: [...state.postsData, { id: 5, text:  post}],
           postText: ''
       }

    case UPDATE_POST_TEXT :
        return { 
            ...state,
            postText: action.changedText
        }
    default : 
    return state;
}
    
}

export let addPostCreator = () => ({type : ADD_POST});
export let updatePostTextCreator = (changedText) => ({type : UPDATE_POST_TEXT, changedText : changedText });


export default profilePageReduce;