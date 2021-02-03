import { connect } from "react-redux";
import { followAC, initUsersAC, unfollowAC } from "../../redux/usersPageReducer";
import Users from './UsersC';

const mapStateToProps = (state) => {
    return { state: state.usersPage }
};

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (user_id) => { dispatch(followAC(user_id)) },
        unfollow: (user_id) => { dispatch(unfollowAC(user_id)) },
        initUsers: (users) => { dispatch(initUsersAC(users)) }

    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;