import { connect } from 'react-redux';
import { addPost, changePostText } from '../../../../redux/profilePageReducer';
import AddPost from './AddPost';

const mapStateToProps = (state) => {
    return {
        state: state.profilePage
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addPost: () => {dispatch(addPostCreator())},
//         changePostText: (text) => {
//             dispatch(updatePostTextCreator(text));
//         }
//     }
// }


let dispatches = { addPost, changePostText};
const AddPostContainer = connect(mapStateToProps, dispatches)(AddPost);

export default AddPostContainer;