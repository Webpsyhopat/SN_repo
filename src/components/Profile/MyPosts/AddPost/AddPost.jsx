import s from './AddPost.module.css';

const AddPost = (props) => {
    const addPost = () => {
        props.addPost();
    }

    const changePostText = (e) => {
        let text = e.target.value;
        props.changePostText(text);
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