import ProfileInfo from './ProfileInfo';
import React from 'react';
import { connect } from 'react-redux';
import { getUserProfileTC } from './../../../redux/profilePageReducer';
import { withRouter } from 'react-router-dom';

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
  return { state: state.profilePage.userProfile,
    userData: state.userData }
};
const mapDispatchToProps = { getUserProfileTC };



export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileInfoContainer));