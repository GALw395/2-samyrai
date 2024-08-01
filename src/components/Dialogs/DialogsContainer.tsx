import { sendMessageAC, updateMessageAC } from '../../redux/dialogs-reducer'
import { Dialogs } from './Dialogs'

type DialogsContainerPropsType = {
    store: any
}

export const DialogsContainer = (props: DialogsContainerPropsType) => {

    let state = props.store.getState().dialogsPage

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC())
    }
    let onNewMessageChange = (text: string) => {
        props.store.dispatch(updateMessageAC(text))
    }

    return (
        <Dialogs dialogsPage={state} updateNewMessageText={onNewMessageChange} sendMessage={onSendMessageClick} />
    )
}