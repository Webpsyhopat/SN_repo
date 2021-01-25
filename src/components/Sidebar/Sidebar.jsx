import { Route } from "react-router-dom";
import Friendsbar from "./Friendsbar/Friendsbar";
import Navbar from "./Navbar/Navbar";
import s from './Sidebar.module.css';

const Sidebar = (props) => {
    return (
        <div className = {s.sidebar}>
            <div className = {s.sidebarItem}><Navbar /></div>
            <Route path='/profile' render = {() => <div className = {s.sidebarItem}><Friendsbar state = {props.state.friendsOnline}/></div>} />
            
        </div>
    )
}

export default Sidebar;