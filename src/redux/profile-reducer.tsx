const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'


let initialState = {
    posts: [
        { message: 'message #1', likesCount: '12' },
        { message: 'message #2', likesCount: '43' },
        { message: 'message #3', likesCount: '143' },
        { message: 'message #4', likesCount: '43' },
    ],
    newPostText: 'bla bla'
}

export const profileReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case ADD_POST:
            
                let newPost = { message: state.newPostText, likesCount: '0' }
                return { ...state, posts: [...state.posts, newPost], newPostText: '' }
                
                // let stateCopy = { ...state, posts: [...state.posts, newPost], newPostText: '' }
                // stateCopy.newPostText = ''
                // state.posts.push(newPost)
                // state.newPostText = ''
                // return stateCopy
            
        case UPDATE_NEW_POST_TEXT:
            
                // let stateCopy = { ...state, newPostText: action.newText }
                // state.newPostText = action.newText
                // return stateCopy
                return { ...state, newPostText: action.newText }
            
        default:
            return state
    }
}

export const addPostAC = () => ({ type: ADD_POST })
export const updateNewPostTextAC = (newPostElement: string) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: newPostElement })