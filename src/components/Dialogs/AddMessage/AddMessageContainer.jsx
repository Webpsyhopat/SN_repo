import { connect } from 'react-redux';
import { sendMessageCreator, updateMessageTextCreator } from '../../../redux/dialogsPageReducer';
import AddMessage from './AddMessage';

const mapStateToProps = (state) => {
    return {
        state: state.dialogsPage,
    } 
}
const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => { dispatch(sendMessageCreator()) },
        updateTextField: (text) => {dispatch(updateMessageTextCreator(text))}
    }
}
const AddMessageContainer = connect(mapStateToProps, mapDispatchToProps)(AddMessage);

export default AddMessageContainer;