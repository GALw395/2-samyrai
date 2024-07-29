
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'




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

type storeType = {
    _state: stateType
    getState: () => stateType
    _callSubscriber: (state: any) => void
    _addPost: () => void
    _updateNewPostText: (newText: string) => void
    subscribe: (observer: any) => void
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
            ]
        }
    },
    _callSubscriber(state: stateType) { },

    getState() {
        return this._state
    },
    subscribe(observer: any) {
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
        if (action.type === 'ADD-POST') {
            // this._addPost()

            let newPost = { message: this._state.profilePage.newPostText, likesCount: '0' }
            this._state = { ...this._state, profilePage: { ...this._state.profilePage, posts: [...this._state.profilePage.posts, newPost] } }
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)

        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            // this._updateNewPostText(action.newText)

            this._state.profilePage.newPostText = action.newText
            this._callSubscriber({ ...this._state })

        }

    }

}



export const addPostAC = () => ({ type: ADD_POST })
export const updateNewPostTextAC = (newPostElement: string) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: newPostElement })