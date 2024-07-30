
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'


export const profileReducer = (state: any, action: any) => {

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


    // if (action.type === ADD_POST) {
    //     let newPost = { message: state.newPostText, likesCount: '0' }
    //     state.posts.push(newPost)
    //     state.newPostText = ''
    // } else if (action.type === UPDATE_NEW_POST_TEXT) {
    //     state.newPostText = action.newText
    // }
    // return state
}



export const addPostAC = () => ({ type: ADD_POST })
export const updateNewPostTextAC = (newPostElement: string) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: newPostElement })