import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css';
import ProfileInfoContainer from './ProfileInfo/ProfileInfoContainer';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfoContainer />
      <MyPostsContainer />

    </div>
  )
}

export default Profile;