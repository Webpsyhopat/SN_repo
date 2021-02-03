import s from './Friendsbar.module.css';

const Friend = (props) => {
    return (
        <div className = {s.item}>
            <img src = {`/user_avatars/${props.ava}.jpg`} />
            <div className = {s.itemName}>{props.name}</div>
        </div>
    )
}

function FriendsBar(props) {
    let friendsList = props.state.map( f => <Friend name = {f.name} ava = {f.id}/>)
    return (
        <div className = {s.friendsBar}>
            <h3>Friends</h3>
            <div className = {s.friendsList}>
                {friendsList}

            </div>
        </div>

    )
}

export default FriendsBar;