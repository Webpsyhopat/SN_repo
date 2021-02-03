import * as axios from 'axios';
import s from './Users.module.css';
import React from 'react';


class Users extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users?count=50')
            .then(response => {
                this.props.initUsers(response.data.items);
            });
        // alert('component is mounted');
    }
    // componentDidUpdate() {
    //     alert('component is updated');
    // }
    // componentWillUnmount(){
    //     alert('Oh NOOOO!!!!');
    // }
    render() {
        return <div>
            {
                this.props.state.Users.map(u => <div key={u.id}>
                    <div>
                        <div>
                            <div>
                                <img className={s.avatarImg} src={u.photos.small != null ? u.photos.small : '/user_avatars/no_photo.png'} />


                            </div>
                            {u.followed
                                ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                                : <button onClick={() => this.props.follow(u.id)}>Follow</button>}
                        </div ><span> {u.name}</span>
                        <span>{u.status}</span></div>
                    {/* <div><span>{u.location.country}</span>
                    <span>{u.location.city}</span></div> */}
                </div>
                )
            }
        </div>
    }
}

export default Users;