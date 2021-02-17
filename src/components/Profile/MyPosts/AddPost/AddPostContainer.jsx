import { connect } from 'react-redux';
import { addPost, changePostText } from '../../../../redux/profilePageReducer';
import AddPost from './AddPost';

const mapStateToProps = (state) => {
    return {
        postText: state.profilePage.postText
    }
}

let dispatches = { addPost, changePostText};
const AddPostContainer = connect(mapStateToProps, dispatches)(AddPost);

export default AddPostContainer;