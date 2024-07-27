
// -----------------------------

export type profilePageType = {
    posts: postType[]
}
export type postType = {
    message: string
    likesCount: string
}

// -----------------------------

export type dialogsPageType = {
    dialogs: dialogType[]
    messages: messageType[]
}
export type dialogType = {
    id: string
    name: string
}
export type messageType = {
    message: string
}

// -----------------------------

export type stateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
} 

export let state: stateType = {

    profilePage: {
        posts: [
            { message: 'message #1', likesCount: '12' },
            { message: 'message #2', likesCount: '43' },
            { message: 'message #3', likesCount: '143' },
            { message: 'message #4', likesCount: '43' },
        ],
    },
    dialogsPage: {
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
        ]
    }
}