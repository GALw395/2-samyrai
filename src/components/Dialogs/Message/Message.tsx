
import { messageType } from '../../../redux/state'
import s from './../Dialogs.module.css'



export const Message = (props: messageType) => {
    return <div className={s.message}>{props.message}</div>
}