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

let dialog = [
    {id: '1', name: 'Lera'},
    {id: '2', name: 'Nastia'},
    {id: '3', name: 'Lexa'},
    {id: '4', name: 'Marina'}
]

let messages = [
    {id: '1', message: 'Hi, Lera'},
    {id: '1', message: 'Hi, Nastia'},
    {id: '1', message: 'Hi, Lexa'},
    {id: '1', message: 'Hi, Marina'},
]

let dialogElements = dialog.map( el => <DialogItem id={el.id} name={el.name}/>)
let messagesElements = messages.map( el => <Message  message={el.message}/> )

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}                
            </div>

        </div>
    )
}