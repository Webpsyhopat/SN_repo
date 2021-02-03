import * as axios from 'axios';
import s from './Users.module.css';



const Users = (props) => {
    if (props.state.Users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                // debugger;
                props.initUsers(response.data.items);
            });
    }
    return <div>
        {
            props.state.Users.map(u => <div key={u.id}>
                <div>
                    <div>
                        <div>
                            <img className={s.avatarImg} src={u.photos.small != null ? u.photos.small : '/user_avatars/no_photo.png'} />
                            
                            
                        </div>
                        {u.followed
                            ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                            : <button onClick={() => props.follow(u.id)}>Follow</button>}
                    </div ><span> {u.name}</span>
                    <span>{u.status}</span></div>
                {/* <div><span>{u.location.country}</span>
                    <span>{u.location.city}</span></div> */}
            </div>
            )
        }
    </div>

}

export default Users;