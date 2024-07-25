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

let dialogData = [
    {id: '1', name: 'Lera'},
    {id: '2', name: 'Nastia'},
    {id: '3', name: 'Lexa'},
    {id: '4', name: 'Marina'}
]

let nessagesData = [
    {id: '1', message: 'Hi, Lera'},
    {id: '1', message: 'Hi, Nastia'},
    {id: '1', message: 'Hi, Lexa'},
    {id: '1', message: 'Hi, Marina'},
]

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem id={dialogData[0].id} name={dialogData[0].name}/>
                <DialogItem id={dialogData[1].id} name={dialogData[1].name}/>
                <DialogItem id={dialogData[2].id} name={dialogData[2].name}/>
                <DialogItem id={dialogData[3].id} name={dialogData[3].name}/>
            </div>
            <div className={s.messages}>
                <Message  message={nessagesData[0].message}/>
                <Message  message={nessagesData[1].message}/>
                <Message  message={nessagesData[2].message}/>
                <Message  message={nessagesData[3].message}/>
            </div>

        </div>
    )
}