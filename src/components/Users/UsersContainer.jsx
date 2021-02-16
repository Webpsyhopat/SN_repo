import { connect } from "react-redux";
import { follow, initUsers, unfollow, changeCurrentPage, setTotalCount, startFetching, stopFetching } from "../../redux/usersPageReducer";
import Users from './Users';
import React from 'react';
import { apiRequest } from "../../dal/axios";

class UsersAPI extends React.Component {
    
    getUsers(page, count) {
        this.props.startFetching();
        apiRequest.get('users?page=' + page + '&count=' + count)
            .then(response => {
                this.props.initUsers(response.data.items);
                this.props.changeCurrentPage(page);
                this.props.setTotalCount(response.data.totalCount);
                this.props.stopFetching();
            });

    }
    componentDidMount() {
        this.getUsers(1, this.props.state.count);

        // alert('component is mounted');
    }
    follow(id, func) {
        apiRequest.post('follow/' + id).then(response => {
            debugger;
            response.data.resultCode === 0 ? func(id) : alert('Can"t follow - error');
        })
    }
    unfollow(id, func) {
        apiRequest.delete('follow/' + id).then(response => {
            response.data.resultCode === 0
                ? func(id)
                : alert('Can"t unfollow - error');
        })
    }
    render() {
        return <Users state={this.props.state}
            getUsers={(...args) => this.getUsers(...args)}
            follow={ this.follow}
            unfollow={ this.unfollow}
            follow2={this.props.follow}
            unfollow2={this.props.unfollow}

        />
    }
}

const mapStateToProps = (state) => {
    return { state: state.usersPage }
};

let mapDispatchToProps = { follow, unfollow, initUsers, changeCurrentPage, setTotalCount, startFetching, stopFetching };

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI);

export default UsersContainer;