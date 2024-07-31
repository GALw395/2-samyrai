

import { ChangeEvent } from 'react'
import { dialogsPageType } from '../../redux/store'
import { DialogItem } from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import { Message } from './Message/Message'
import { sendMessageAC, updateMessageAC } from '../../redux/dialogs-reducer'

type DialogsPropsType = {
    dialogsPage: dialogsPageType
    dispatch: (action: any) => void
}

export const Dialogs = (props: DialogsPropsType) => {


    let dialogElements = props.dialogsPage.dialogs.map(el => <DialogItem id={el.id} name={el.name} />)
    let messagesElements = props.dialogsPage.messages.map(el => <Message message={el.message} />)

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateMessageAC(e.currentTarget.value))
    }
    let onSendMessageClick = () => {
        props.dispatch(sendMessageAC())
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
                            value={props.dialogsPage.newMessageText}
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