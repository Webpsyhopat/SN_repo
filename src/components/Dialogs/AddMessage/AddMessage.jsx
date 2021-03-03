import s from './AddMessage.module.css';
import { Formik } from 'formik';



const AddMessageForm = (props) => {
    return(
    <Formik
        initialValues={{ newMessageText: ''}}
        onSubmit={(values, actions) => {
            props.sendMessage(values.newMessageText);
            actions.setSubmitting(false);
            actions.resetForm({
                values: {
                    newMessageText: ''
                }
            });
        }}>
        {({
            values,
            handleChange,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
        }) => (
            <form onSubmit={handleSubmit}>
                    <textarea
                    name="newMessageText"
                    className={s.textBox}
                    onChange={handleChange}
                    value={values.newMessageText}
                />
                              
                <button type="submit" disabled={isSubmitting}>
                    Say
           </button>
            </form>
        )}
    </Formik>
    )
}

const AddMessage = (props) => {
    const sendMessage = (newMessageText) => {
        if (newMessageText) {
            props.sendMessage(newMessageText);
        }
    }
    

    // const updateTextField = (e) => {
    //     let text = e.target.value;
    //     props.updateTextField(text);
    // }
    return (
        <div>
            <AddMessageForm sendMessage={sendMessage}/>
            {/* <div>
                <textarea 
                className = {s.textBox} 
                    onChange={updateTextField}
                value = {props.state.messageText}/>
            </div>
            <div>
                <button onClick = { sendMessage }>Say</button>
            </div> */}
        </div>
    )
}

export default AddMessage;