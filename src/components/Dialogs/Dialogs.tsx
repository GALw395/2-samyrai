import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'


type DialogItemPropsType = {
    id: string
    name: string
}

type MessagePropsType = {
    message: string
}

const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id}>
                {props.name}
            </NavLink>
        </div>
    )
}

const Message = (props: MessagePropsType) => {
    return <div className={s.message}>{props.message}</div>
}


export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem id='1' name='Lera'/>
                <DialogItem id='2' name='Nastia'/>
                <DialogItem id='3' name='Lexa'/>
                <DialogItem id='4' name='Marina'/>
            </div>
            <div className={s.messages}>
                <Message message='Hi, Lera'/>
                <Message message='Hi, Nastia'/>
                <Message message='Hi, Marina'/>
            </div>

        </div>
    )
}