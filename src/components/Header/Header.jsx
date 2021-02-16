import s from './Header.module.css';

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <img src='/img/logo.png' alt='logotype' className={s.logoImg} />
                <span className={s.logoText}>SocialNet</span>
            </div>
            <div className = {s.userMenuBlock}>
                {
                    props.state.userData.isAuthorised 
                        ? <div className={s.userMenu}>Hi, {props.state.userData.login}</div>
                        : <div className= {s.notAuth}>Sign in</div>
                }
            </div>
        </header>
    )
}

export default Header;