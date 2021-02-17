import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { authorizationCheckTC } from "../../redux/userDataReducer";

class HeaderAPI extends React.Component {
    componentDidMount(){
        this.props.authorizationCheckTC();
    }
    render(){
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        state: state.userData
    }
}

let mapDispatchToProps = { authorizationCheckTC };

let HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderAPI);

export default HeaderContainer;