import { addPostAC, updateNewPostTextAC } from '../../../redux/profile-reducer'
import { MyPosts } from './MyPosts'

type MyPostsContainerPropsType = {
    store: any
}



export const MyPostsContainer = (props: MyPostsContainerPropsType) => {

    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostAC())
    }
    let onPostChange = (text: string) => {
        props.store.dispatch(updateNewPostTextAC(text))
    }

    return (

        <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
        />

    )
}