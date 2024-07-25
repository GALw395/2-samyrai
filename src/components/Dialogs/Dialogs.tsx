import { DialogItem } from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import { Message } from './Message/Message'


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