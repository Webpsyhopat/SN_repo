const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    userProfile: {
        aboutMe: null,
        contacts: {
            facebook: null,
            website: null,
            vk: null,
            twitter: null,
            instagram: null,
            youtube: null,
            github: null
        },
        lookingForAJob: true,
        lookingForAJobDescription: null,
        fullName: null,
        userId: null,
        photos: {
            small: null,
            large: null
        } 
    },
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
    case SET_USER_PROFILE:
        return {
            ...state,
            userProfile: {...action.userProfile}
        }
    default : 
    return state;
}
    
}

export let addPost = () => ({type : ADD_POST});
export let changePostText = (changedText) => ({type : UPDATE_POST_TEXT, changedText });
export let setUserProfile = (userProfile) => ({ type: SET_USER_PROFILE, userProfile });


export default profilePageReduce;