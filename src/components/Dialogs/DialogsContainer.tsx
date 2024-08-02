import { connect } from 'react-redux'
import { sendMessageAC, updateMessageAC } from '../../redux/dialogs-reducer'
import { Dialogs } from './Dialogs'



let mapStateToProps = (state: any) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewMessageText: (text: any) => {dispatch(updateMessageAC(text))},
        sendMessage: () => {dispatch(sendMessageAC())}
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)