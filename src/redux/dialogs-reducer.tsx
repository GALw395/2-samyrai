
const UPDATE_MESSAGE = 'UPDATE-MESSAGE'
const SEND_MESSAGE = 'SEND-MESSAGE'


export const dialogsReducer = (state: any, action: any) => {

    switch (action.type) {
        case UPDATE_MESSAGE:
            state.newMessageText = action.newMessage
            return state
        case SEND_MESSAGE:
            let newMessage = { message: state.newMessageText }
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state
        default:
            return state
    }



    // if (action.type === UPDATE_MESSAGE) {
    //     state.newMessageText = action.newMessage
    // } else if (action.type === SEND_MESSAGE) {
    //     let newMessage = { message: state.newMessageText }
    //     state.messages.push(newMessage)
    //     state.newMessageText = ''
    // }
    // return state
}


export const updateMessageAC = (message: string) => ({ type: UPDATE_MESSAGE, newMessage: message })
export const sendMessageAC = () => ({ type: SEND_MESSAGE })