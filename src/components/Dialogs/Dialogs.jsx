import { NavLink } from 'react-router-dom';
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
    let dialogsData = [
        { name: 'Kent', id: 1 },
        { name: 'Vanya', id: 2 },
        { name: 'Petya', id: 3 },
        { name: 'Glasha', id: 4 },
        { name: 'Masha', id: 5 },
        { name: 'Pasha', id: 6 }
    ];

    let messagesData = [
        { id: 1, message: 'Hi there!' },
        { id: 2, message: 'How Are You?' },
        { id: 3, message: "Let's speak about something" },
        { id: 4, message: 'Why are You so quite?' }

    ];

    let dialogsElements = dialogsData.map(d => <Dialog name={d.name} id={d.id} />);
    let messagesElements = messagesData.map(m => <Message message={m.message} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogWith}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;