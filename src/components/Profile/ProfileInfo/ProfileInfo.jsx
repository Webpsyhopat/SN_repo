import Preload from '../../common/Preload';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  if(!props.state){
    <Preload />
  }
  return (
    <div>
      <div className = {s.mainImage}>
        <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" className={s.top_large_img} alt = 'user-page-image'/>
      </div>
      <div className={s.descriptionBlock}>
        <div className = {s.avaDiv}>
          
          <img className={s.avatar} src={props.state.photos.small != null
            ? props.state.photos.small
            : '/user_avatars/my_ava.png'} alt = 'user-avatar' />
          </div>
        <div className={s.userNameDiv}>{props.state.fullName != null ? props.state.fullName : 'Unnamed User'} </div>
      </div>
      {props.state.aboutMe != null 
        ? <div className={s.descriptionDiv}><div className={s.aboutDiv}>About me <p>{props.state.aboutMe}</p></div></div>
        : <div>Nothing About Me</div>
        }
      
    </div>
  )
}

export default ProfileInfo;