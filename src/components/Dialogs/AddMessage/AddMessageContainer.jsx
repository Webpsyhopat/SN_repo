import { connect } from 'react-redux';
import { sendMessage, updateTextField } from '../../../redux/dialogsPageReducer';
import AddMessage from './AddMessage';

const mapStateToProps = (state) => {
    return {
        state: state.dialogsPage,
    } 
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addMessage: () => { dispatch(sendMessageCreator()) },
//         updateTextField: (text) => {dispatch(updateMessageTextCreator(text))}
//     }
// }

let dispatches = { sendMessage, updateTextField}

const AddMessageContainer = connect(mapStateToProps, dispatches)(AddMessage);

export default AddMessageContainer;