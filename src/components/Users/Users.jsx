import { NavLink } from 'react-router-dom';
import Preload from '../common/Preload';
import s from './Users.module.css';

const Users = (props) => {
    let pages = [];
    for (let i = 1; i <= Math.ceil(props.state.totalCount / props.state.count); i++) {
        pages.push(i);
    }

    return <div className={s.usersPage}>
        {props.state.isFetching && <Preload />}
        <div>
            {pages.map(p => {
                return <span className={props.state.currentPage === p ? s.selectedPage : s.pages}
                    onClick={(e) => { props.getUsers(p, props.state.count) }}>{p}</span>
            })}
        </div>
        {
            props.state.Users.map(u => <div key={u.id}>
                <div>
                    <div>
                        <div>
                            
                                <img className={s.avatarImg} src={u.photos.small != null ? u.photos.small : '/user_avatars/no_photo.png'} />
                                
                        </div>
                        {u.followed
                            ? <button onClick={() => props.unfollow(u.id, props.unfollow2)}>Unfollow</button>
                            : <button onClick={() => props.follow(u.id, props.follow2)}>Follow</button>}
                    </div >
                    <NavLink to={'/profile/' + u.id}>{u.name}</NavLink>
                    <span>{u.status}</span></div>
                {/* <div><span>{u.location.country}</span>
                    <span>{u.location.city}</span></div> */}
            </div>
            )
        }
    </div>

}

export default Users;