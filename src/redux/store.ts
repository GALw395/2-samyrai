import { dialogsReducer } from "./dialogs-reducer"
import { profileReducer } from "./profile-reducer"


export type profilePageType = {
    posts: postType[]
    newPostText: string
}
export type postType = {
    message: string
    likesCount: string
}

// -----------------------------

export type dialogsPageType = {
    dialogs: dialogType[]
    messages: messageType[]
    newMessageText: string
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

// --------------------------

export type storeType = {
    _state: stateType
    getState: () => stateType
    _callSubscriber: (state: any) => void
    _addPost: () => void
    _updateNewPostText: (newText: string) => void
    subscribe: (observer: () => void) => void
    dispatch: (action: any) => void
}

// --------------------------

export let store: storeType = {
    _state: {
        profilePage: {
            posts: [
                { message: 'message #1', likesCount: '12' },
                { message: 'message #2', likesCount: '43' },
                { message: 'message #3', likesCount: '143' },
                { message: 'message #4', likesCount: '43' },
            ],
            newPostText: 'bla bla'
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
            ],
            newMessageText: ''
        }
    },
    _callSubscriber(state: stateType) { },

    getState() {
        return this._state
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },

    _addPost() {
        let newPost = { message: this._state.profilePage.newPostText, likesCount: '0' }
        this._state = { ...this._state, profilePage: { ...this._state.profilePage, posts: [...this._state.profilePage.posts, newPost] } }
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    _updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber({ ...this._state })
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber({ ...this._state })
    }
}