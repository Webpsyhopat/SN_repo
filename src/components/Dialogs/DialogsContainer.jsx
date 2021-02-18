import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import authChecker from '../../hoc/authChecker';
import { compose } from 'redux';


const mapStateToProps = (state) => {
    return {
        state: state.dialogsPage,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {}
};

export default compose(connect(mapStateToProps, mapDispatchToProps),
    authChecker
)(Dialogs);