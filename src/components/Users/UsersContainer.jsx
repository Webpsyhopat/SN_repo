import { connect } from "react-redux";
import { followTC, unfollowTC, getUsersTC } from "../../redux/usersPageReducer";
import Users from './Users';
import React from 'react';
import { compose } from "redux";
import authChecker from "../../hoc/authChecker";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(1, this.props.state.count);
    }

    onPageChange = (page) => {
        this.props.getUsers(page, this.props.state.count);
    }

    render() {
        return <Users state={this.props.state}
            onPageChange={this.onPageChange}
            follow={this.props.followTC}
            unfollow={this.props.unfollowTC}
        />
    }
}

const mapStateToProps = (state) => {return { state: state.usersPage }};

let mapDispatchToProps = {followTC, unfollowTC,getUsers: getUsersTC};

export default compose(connect(mapStateToProps, mapDispatchToProps),
    authChecker
)(UsersContainer);