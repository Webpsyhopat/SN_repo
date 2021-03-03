import ProfileInfo from './ProfileInfo';
import React from 'react';
import { connect } from 'react-redux';
import { getUserProfileTC, setProfileStatusTC} from './../../../redux/profilePageReducer';
import { withRouter } from 'react-router-dom';
import authChecker from '../../../hoc/authChecker';
import { compose } from 'redux';
class ProfileInfoContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    this.props.getUserProfileTC(userId ? userId : this.props.userData.id);
  }

  render() {
    return <ProfileInfo {...this.props} />
  }
}

const mapStateToProps = (state) => {
  return {
    state: state.profilePage.userProfile,
    userData: state.userData.userData,
    profileStatus: state.profilePage.profileStatus
  }
};
const mapDispatchToProps = { getUserProfileTC, changeStatus: setProfileStatusTC };

export default compose(connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  authChecker
)(ProfileInfoContainer);
