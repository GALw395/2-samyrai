const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'


let initialStare = {
    posts: [
        { message: 'message #1', likesCount: '12' },
        { message: 'message #2', likesCount: '43' },
        { message: 'message #3', likesCount: '143' },
        { message: 'message #4', likesCount: '43' },
    ],
    newPostText: 'bla bla'
}

export const profileReducer = (state = initialStare, action: any) => {

    switch (action.type) {
        case ADD_POST:

            let newPost = { message: state.newPostText, likesCount: '0' }
            state.posts.push(newPost)
            state.newPostText = ''
            return state

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

export const addPostAC = () => ({ type: ADD_POST })
export const updateNewPostTextAC = (newPostElement: string) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: newPostElement })