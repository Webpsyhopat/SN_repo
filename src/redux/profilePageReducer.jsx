const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

let profilePageReduce = (action, state) => {
switch(action.type){
    case ADD_POST :
    state.postsData.push(
        {
            id: 5,
            text: state.postText,
        }
    );
    state.postText = '';
    return state;

    case UPDATE_POST_TEXT :
        state.postText = action.changedText;
        return state;
    default : 
    return state;
}
    
}

export let addPostCreator = () => ({type : ADD_POST});
export let updatePostTextCreator = (changedText) => ({type : UPDATE_POST_TEXT, changedText : changedText });


export default profilePageReduce;