
import React from 'react'
import { postType } from '../../../redux/store'
import s from './MyPosts.module.css'
import { Post } from './Post/Post'

type MyPostsPropsType = {
  updateNewPostText: (test: string) => void
  addPost: () => void
  posts: postType[]
  newPostText: string
}



export const MyPosts = (props: MyPostsPropsType) => {

  let postsElements = props.posts.map(el => <Post message={el.message} likesCount={el.likesCount} />)
  let newPostElement: any = React.createRef()
  

  let onAddPost = () => {
    props.addPost()
  }  
  let onPostChange = () => {
    props.updateNewPostText(newPostElement.current.value)
  }

  return (

    <div className={s.postBlockStyle}>
      <h3>my posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
        </div>
        <button  onClick={ onAddPost } >Add new post</button>
      </div>
      <div>new post</div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}