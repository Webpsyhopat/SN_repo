import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" className={s.top_large_img} />
      </div>
      <div className={s.descriptionBlock}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyJN66lqAeSpmX6ZhdbppNM8f4_71hzIiSWA&usqp=CAU' />
        ava + desc
      </div>
    </div>
  )
}

export default ProfileInfo;