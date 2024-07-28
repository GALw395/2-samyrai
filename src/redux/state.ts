





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
    addPost: () => void
    updateNewPostText: (newText: string) => void
    subscribe: (observer: any) => void
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
    getState(){
        return this._state
    },
    _callSubscriber (state: any){},
    addPost(){
        let newPost = { message: this._state.profilePage.newPostText, likesCount: '0'}
        this._state = {...this._state,  profilePage: {...this._state.profilePage, posts: [...this._state.profilePage.posts, newPost]}} 
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText    
        this._callSubscriber({...this._state})
    },    
    subscribe(observer: any) {
        this._callSubscriber = observer
    }
}

// --------------------------

// let rerenderEntireTree = (state: any) => {    
// }

// export let state: stateType = {
    
//     profilePage: {
//         posts: [
//             { message: 'message #1', likesCount: '12' },
//             { message: 'message #2', likesCount: '43' },
//             { message: 'message #3', likesCount: '143' },
//             { message: 'message #4', likesCount: '43' },
//         ],
//         newPostText: 'bla bla'
//     },
//     dialogsPage: {
//         dialogs: [
//             { id: '1', name: 'Lera' },
//             { id: '2', name: 'Nastia' },
//             { id: '3', name: 'Lexa' },
//             { id: '4', name: 'Marina' }
//         ],
//         messages: [
//             { message: 'Hi, Lera' },
//             { message: 'Hi, Nastia' },
//             { message: 'Hi, Lexa' },
//             { message: 'Hi, Marina' },
//         ]
//     }
// }

// export let addPost = () => {
//     let newPost = { 
//         message: state.profilePage.newPostText, 
//         likesCount: '0' 
//     }
//     state = {...state,  profilePage: {...state.profilePage, posts: [...state.profilePage.posts, newPost]}} 
//     state.profilePage.newPostText = ''
//     // state.profilePage.posts.push(newPost)
//     rerenderEntireTree(state)
// }

// export let updateNewPostText = (newText: string) => {
//     state.profilePage.newPostText = newText    
//     rerenderEntireTree({...state})
// }

// export const subscribe = (observer: any) => {
//     rerenderEntireTree = observer
// }