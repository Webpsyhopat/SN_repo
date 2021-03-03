import { useState } from 'react';
import s from './Header.module.css';

const Header = (props) => {
    let [showUserMenu, setUserMenu] = useState(false);
const toggleMenu = () => {
    showUserMenu ? setUserMenu(false) : setUserMenu(true)
}

    return (
        <header className={s.header}>
            <div className={s.logo}>
                <img src='/img/logo.png' alt='logotype' className={s.logoImg} />
                <span className={s.logoText}>SocialNet</span>
            </div><div className={s.userMenuBlock} >
                {props.state.userData.isAuthorised
                    ? <div className={s.userMenu} onClick={toggleMenu}>
                        Hi, {props.state.userData.login}
                        {showUserMenu ?<UserMenu {...props} /> : ''}
                        </div>
                    : <div className={s.notAuth}>Sign in</div>}
            </div >
                
        </header>
    )
}

const UserMenu = (props) => {
    return (
            <div className={s.underMenu}>
            <span onClick={() => props.LogoutTC()}>Logout</span>
                </div>
    )
    
}

export default Header;