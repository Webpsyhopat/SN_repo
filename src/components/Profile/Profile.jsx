import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div>
        <div>
          <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" className={s.top_large_img} />
        </div>
        <div>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyJN66lqAeSpmX6ZhdbppNM8f4_71hzIiSWA&usqp=CAU' />
        ava + desc
      </div>
        <MyPosts />

      </div>
    )
}

export default Profile;