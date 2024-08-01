import { ChangeEvent } from 'react'
import { DialogItem } from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import { Message } from './Message/Message'

type DialogsPropsType = {
    dialogsPage: any
    updateNewMessageText: (e: string) => void
    sendMessage: () => void
}

export const Dialogs = (props: DialogsPropsType) => {

    let state = props.dialogsPage


    let dialogElements = state.dialogs.map((el: { id: string; name: string }) => <DialogItem id={el.id} name={el.name} />)
    let messagesElements = state.messages.map((el: { message: string }) => <Message message={el.message} />)
    
    let onSendMessageClick = () => {
        props.sendMessage()
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageText(e.target.value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <div>
                        <textarea
                            value={state.newMessageText}
                            onChange={onNewMessageChange}
                            placeholder='Введите сообщение'
                        ></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>

            </div>

        </div>
    )
}