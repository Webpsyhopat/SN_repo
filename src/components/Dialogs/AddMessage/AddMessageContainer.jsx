import { connect } from 'react-redux';
import { sendMessage } from '../../../redux/dialogsPageReducer';
import AddMessage from './AddMessage';

const mapStateToProps = (state) => {
    return {
        state: state.dialogsPage,
    } 
}

let dispatches = { sendMessage}

const AddMessageContainer = connect(mapStateToProps, dispatches)(AddMessage);

export default AddMessageContainer;