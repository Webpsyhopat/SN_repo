const SET_AUTH = 'SET_AUTH';

let initialState = {
userData:{
    id: null,
    email: null,
    login:null,
    isAuthorised: false
},

};

let userDataReduce = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH:
            return {
                ...state,
                userData: {...action.userData,
                isAuthorised: true}
            }
        default:
            return state;
    }
};

export let setAuth = (userData) => ({ type: SET_AUTH, userData});

export default userDataReduce;