import FriendsBar from "./FriendsBar";
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        state: state.sidebarBlocksData.friendsOnline,
        }
}

const mapDispatchToProps = () => {
    return {}
}

const FriendsBarConteiner = connect(mapStateToProps, mapDispatchToProps)(FriendsBar);


export default FriendsBarConteiner;