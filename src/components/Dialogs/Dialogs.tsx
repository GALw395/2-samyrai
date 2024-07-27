
import { dialogsPageType } from '../../redux/state'
import { DialogItem } from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import { Message } from './Message/Message'

type DialogsPropsType = {
    state: dialogsPageType
}

export const Dialogs = (props: DialogsPropsType) => {


    let dialogElements = props.state.dialogs.map(el => <DialogItem id={el.id} name={el.name} />)
    let messagesElements = props.state.messages.map(el => <Message message={el.message} />)

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