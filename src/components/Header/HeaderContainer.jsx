import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { LogoutTC } from "../../redux/userDataReducer";

class HeaderAPI extends React.Component {
   
    render(){
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        state: state.userData
    }
}

let mapDispatchToProps = {  LogoutTC };

let HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderAPI);

export default HeaderContainer;