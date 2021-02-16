import ProfileInfo from './ProfileInfo';
import React from 'react';
import { connect } from 'react-redux';
import { setUserProfile } from './../../../redux/profilePageReducer';
import { apiRequest} from '../../../dal/axios'
import { withRouter } from 'react-router-dom';

class ProfileInfoContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 1045;
    }
    apiRequest.get('profile/' + userId).then(response => {
      this.props.setUserProfile(response.data);
    })
  }
  render() {
    return <ProfileInfo {...this.props} />

  }
}

const mapStateToProps = (state) => {
  return { state: state.profilePage.userProfile,
    userData: state.userData }
};
const mapDispatchToProps = { setUserProfile };



export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileInfoContainer));