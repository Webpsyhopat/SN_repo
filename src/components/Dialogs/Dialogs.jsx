import { NavLink } from 'react-router-dom';
import AddMessageContainer from './AddMessage/AddMessageContainer';
import s from './Dialogs.module.css';

const Dialog = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialogPerson}>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    let dialogsData = props.state.dialogsData;
    let messagesData = props.state.messagesData;

    let dialogsElements = dialogsData.map(d => <Dialog name={d.name} id={d.id} />);
    let messagesElements = messagesData.map(m => <Message message={m.message} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogWith}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <AddMessageContainer />
            </div>
        </div>
    )
}

export default Dialogs;