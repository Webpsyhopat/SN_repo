import { ProfileAPI } from "../dal/axios";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

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
    profileStatus: '',
}

let profilePageReduce = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let post = action.postText;
            return {
                ...state,
                postsData: [...state.postsData, { id: 5, text: post }]
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile: { ...action.userProfile }
            }
        case SET_STATUS:
            return {
                ...state,
                profileStatus: action.status
            }
        default:
            return state;
    }

}

export let addPost = (postText) => ({ type: ADD_POST, postText});
let setUserProfile = (userProfile) => ({ type: SET_USER_PROFILE, userProfile });
let setProfileStatus = (status) => ({ type: SET_STATUS, status });

export const getUserProfileTC = (userId) => {
    return (dispatch) => {
        ProfileAPI.getUserProfile(userId).then(response => {
            dispatch(setUserProfile(response));
            dispatch(getProfileStatusTC(userId));
        })
    }
}

export const setProfileStatusTC = (newStatus) => {
    return (dispatch) => {
        ProfileAPI.setProfileStatus(newStatus).then(response => {
            debugger;
            if (response.resultCode === 0) {
                dispatch(setProfileStatus(newStatus));
            }
        })
    }
}

const getProfileStatusTC = (userId) => {
    return (dispatch) => {
        ProfileAPI.getProfileStatus(userId).then(response => {
            dispatch(setProfileStatus(response.data ? response.data : 'set your status'));
        })
    }
}

export default profilePageReduce;