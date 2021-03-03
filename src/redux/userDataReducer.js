import { AuthAPI } from "../dal/axios";

const SET_AUTH = 'SET_AUTH';
const SET_SERVER_ERROR = 'SET_SERVER_ERROR';

let initialState = {
    userData: {
        id: null,
        email: null,
        login: null,
        isAuthorised: false,
        authEroor: null
    },
    authError: {
        authErrorMessage: null
    }
};

let userDataReduce = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH:
            return {
                ...state,
                userData: {
                    ...action.userData
                }
            }
        case SET_SERVER_ERROR: {
            return {
                ...state,
                authError: {authErrorMessage: action.errorMessage[0],
                    captchaURL: action.captchaURL}
            }
        }
        default:
            return state;
    }
};

let setAuth = (userData) => ({ type: SET_AUTH, userData });
let setServerError = (errorMessage, captchaURL) => ({ type: SET_SERVER_ERROR, errorMessage, captchaURL })

export const authorizationCheckTC = () => {
    return (dispatch) => {
        AuthAPI.me().then(response => {
            if (response.resultCode === 0) {
                dispatch(setAuth({ ...response.data, isAuthorised: true, authEroor: null }))
            } else {
                dispatch(setAuth({ id: null, email: null, login: null, isAuthorised: false, authEroor: null }))
            }
        })
    }
}

export const LoginTC = (email, password, rememberMe, captcha) => {
    return (dispatch) => {
        AuthAPI.login(email, password, rememberMe, captcha).then(response => {
            if (response.resultCode === 0) {
                dispatch(authorizationCheckTC());
            } else if (response.resultCode === 10) {
                AuthAPI.getCaptcha().then(response => {
                    dispatch(setServerError(['Введите символы с картинки:'], response.data.url));
                })
            } else {
                let captchaURL = null;
                dispatch(setServerError(response.messages, captchaURL));
            }
        })
    }
}
export const LogoutTC = () => {
    return (dispatch) => {
        AuthAPI.logout().then(response => {
            if (response.resultCode === 0) {
                dispatch(authorizationCheckTC());
            }
        })
    }
}

export default userDataReduce;