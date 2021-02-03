import { connect } from 'react-redux';
import { addPostCreator, updatePostTextCreator } from '../../../../redux/profilePageReducer';
import AddPost from './AddPost';

const mapStateToProps = (state) => {
    return {
        state: state.profilePage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {dispatch(addPostCreator())},
        changePostText: (text) => {
            dispatch(updatePostTextCreator(text));
        }
    }
}

const AddPostContainer = connect(mapStateToProps, mapDispatchToProps)(AddPost);

export default AddPostContainer;