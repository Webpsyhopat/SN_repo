import { AuthAPI } from "../dal/axios";

const SET_AUTH = 'SET_AUTH';

let initialState = {
    userData: {
        id: null,
        email: null,
        login: null,
        isAuthorised: false
    },

};

let userDataReduce = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH:
            return {
                ...state,
                userData: {
                    ...action.userData,
                    isAuthorised: true
                }
            }
        default:
            return state;
    }
};

let setAuth = (userData) => ({ type: SET_AUTH, userData });

export const authorizationCheckTC = () => {
    
    return (dispatch) => {
        AuthAPI.me().then(response => {
            dispatch(setAuth(response.data))
        })
    }
}

export default userDataReduce;