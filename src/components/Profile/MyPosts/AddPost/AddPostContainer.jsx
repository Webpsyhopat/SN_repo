import { connect } from 'react-redux';
import { addPost } from '../../../../redux/profilePageReducer';
import AddPost from './AddPost';

const mapStateToProps = (state) => {
    return {
        postText: state.profilePage.postText
    }
}

let dispatches = { addPost };
const AddPostContainer = connect(mapStateToProps, dispatches)(AddPost);

export default AddPostContainer;