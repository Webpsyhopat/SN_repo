import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img src='/img/logo.png' alt = 'logotype' className = {s.logoImg}/>
            <span className = {s.logoText}>SocialNet</span>
        </header>
    )
}

export default Header;