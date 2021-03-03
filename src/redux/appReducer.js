import { authorizationCheckTC } from "./userDataReducer";

const SET_INITIALIZED = 'SET_INITIALIZED';

let initialState = {
    isInitialized: false,
};

let appReduce = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                isInitialized: true
            }
        default:
            return state;
    }
};

let setInitialized = () => ({ type: SET_INITIALIZED });

export const appInitialization = () => (dispatch) => {
    let promise = dispatch(authorizationCheckTC());
    Promise.all([promise])
    .then( () => {
        dispatch(setInitialized())
    });
}




export default appReduce;