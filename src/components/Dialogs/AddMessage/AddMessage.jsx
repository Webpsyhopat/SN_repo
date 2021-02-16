import s from './AddMessage.module.css';

const AddMessage = (props) => {

    const sendMessage = () => {
        props.sendMessage();
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
                    onChange={updateTextField}
                value = {props.state.messageText}/>
            </div>
            <div>
                <button onClick = { sendMessage }>Say</button>
            </div>
        </div>
    )
}

export default AddMessage;