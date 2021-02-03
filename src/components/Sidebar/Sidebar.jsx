import { Route } from "react-router-dom";
import FriendsBarConteiner from "./Friendsbar/FriendsBarConteiner";
import Navbar from "./Navbar/Navbar";
import s from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <div className = {s.sidebar}>
            <div className = {s.sidebarItem}><Navbar /></div>
            <Route path='/profile' 
                render={() => <div className={s.sidebarItem}><FriendsBarConteiner /></div>} />
        </div>
    )
}

export default Sidebar;