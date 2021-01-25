import s from './AddPost.module.css';
import React from 'react';
import { addPostCreator, updatePostTextCreator } from '../../../../redux/profilePageReducer';

const AddPost = (props) => {

    const addPost = () => {
        props.dispatch(addPostCreator());
    }

    const changePostText = (e) => {
        let text = e.target.value;
        props.dispatch(updatePostTextCreator(text));
    }
    
    return (
        <div>
            <div>
                <textarea 
                className = {s.textBox} 
                value = {props.state.postText}
                onChange = {changePostText} />
            </div>
            <div>
                <button onClick = { addPost } >Say</button>
            </div>
        </div>
    )
}

export default AddPost;