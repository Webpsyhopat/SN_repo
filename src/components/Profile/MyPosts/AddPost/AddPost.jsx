import s from './AddPost.module.css';

const AddPost = (props) => {

    const changePostText = (e) => {
        props.changePostText(e.target.value);
    }

    return (
        <div>
            <div>
                <textarea
                    className={s.textBox}
                    value={props.postText}
                    onChange={changePostText} />
            </div>
            <div>
                <button onClick={props.addPost} >Say</button>
            </div>
        </div>
    )
}

export default AddPost;