import { connect } from 'react-redux'
import { addPostAC, updateNewPostTextAC } from '../../../redux/profile-reducer'
import { MyPosts } from './MyPosts'

let mapStateToProps = (state: any) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: () => { dispatch(addPostAC()) },
        updateNewPostText: (text: string) => { dispatch(updateNewPostTextAC(text)) }
    }
}


export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)