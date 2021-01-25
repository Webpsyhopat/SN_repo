import s from './AddMessage.module.css';
import React from 'react';
import { sendMessageCreator, updateMessageTextCreator } from '../../../redux/dialogsPageReducer';

const AddMessage = (props) => {

    const addMessage = () => {
        props.dispatch (sendMessageCreator());
    }

    const updateTextField = (e) => {
        let text = e.target.value;
        props.dispatch(updateMessageTextCreator(text));
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