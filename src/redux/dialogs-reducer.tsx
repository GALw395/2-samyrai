
const UPDATE_MESSAGE = 'UPDATE-MESSAGE'
const SEND_MESSAGE = 'SEND-MESSAGE'


let initialStare = {
    dialogs: [
        { id: '1', name: 'Lera' },
        { id: '2', name: 'Nastia' },
        { id: '3', name: 'Lexa' },
        { id: '4', name: 'Marina' }
    ],
    messages: [
        { message: 'Hi, Lera' },
        { message: 'Hi, Nastia' },
        { message: 'Hi, Lexa' },
        { message: 'Hi, Marina' },
    ],
    newMessageText: ''
}

export const dialogsReducer = (state = initialStare, action: any) => {

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