import React from 'react';
import { connect } from 'react-redux';
import { apiRequest } from '../../dal/axios';
import { setAuth } from "../../redux/userDataReducer";
import Header from './Header';

class HeaderAPI extends React.Component {
    authorizationCheck(){
        apiRequest.get('/auth/me').then(response => {
            // let { id, email, login } = response.data.data;
            response.data.resultCode === 0 && this.props.setAuth(response.data.data); 
        }
        )
    }
    componentDidMount(){
        this.authorizationCheck();
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

let mapDispatchToProps = { setAuth };

let HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderAPI);

export default HeaderContainer;