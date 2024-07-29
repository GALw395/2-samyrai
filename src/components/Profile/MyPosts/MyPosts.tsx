
import React from 'react'
import { postType } from '../../../redux/state'
import s from './MyPosts.module.css'
import { Post } from './Post/Post'

type MyPostsPropsType = {
  posts: postType[]
  newPostText: string
  dispatch: (action: any) => void
}



export const MyPosts = (props: MyPostsPropsType) => {

  let postsElements = props.posts.map(el => <Post message={el.message} likesCount={el.likesCount} />)

  let newPostElement: any = React.createRef()

  let addPost = () => {
    props.dispatch({type: 'ADD-POST'})
    // props.addPost()
  }   

  let onPostChange = () => {
    props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: newPostElement.current.value})
    // props.updateNewPostText(newPostElement.current.value)

  }

  return (

    <div className={s.postBlockStyle}>
      <h3>my posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
        </div>
        <button  onClick={ addPost } >Add new post</button>
      </div>
      <div>new post</div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}