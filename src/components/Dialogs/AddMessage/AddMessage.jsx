import s from './AddMessage.module.css';

const AddMessage = (props) => {

    const addMessage = () => {
        props.addMessage();
    }

    const updateTextField = (e) => {
        let text = e.target.value;
        props.updateTextField(text);
    }
    return (
        <div>
            <div>
                <textarea 
                className = {s.textBox} 
                onChange = {updateTextField}
                value = {props.state.messageText}/>
            </div>
            <div>
                <button onClick = { addMessage }>Say</button>
            </div>
        </div>
    )
}

export default AddMessage;