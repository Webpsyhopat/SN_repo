import * as axios from 'axios';
import s from './Users.module.css';
import React from 'react';

class Users extends React.Component {
    getUsers(page, count) {
        let endPoint = 'https://social-network.samuraijs.com/api/1.0/users?page='+page+'&count='+count;
        axios.get(endPoint)
            .then(response => {
                this.props.initUsers(response.data.items);
                this.props.changeCurrentPage(page);
                this.props.setTotalCount(response.data.totalCount);
            });
    }
    componentDidMount() {
        this.getUsers(1, this.props.state.count);

        // alert('component is mounted');
    }
    // componentDidUpdate() {
    //     alert('component is updated');
    // }
    // componentWillUnmount(){
    //     alert('Oh NOOOO!!!!');
    // }
    render() {
        let pages = [];
        for (let i = 1; i <= Math.ceil(this.props.state.totalCount / this.props.state.count); i++) {
            pages.push (i);
        }
       
        return <div className = {s.usersPage}>
            <div>
                {pages.map( p => {
                    return <span className={this.props.state.currentPage === p ? s.selectedPage : s.pages} 
                    onClick={(e) => { this.getUsers(p, this.props.state.count)}}>{p}</span>
                })}
            </div>
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