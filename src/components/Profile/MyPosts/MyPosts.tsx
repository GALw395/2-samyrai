import s from './MyPosts.module.css'
import { Post } from './Post/Post'

export const MyPosts = () => {
  return (

    <div>my posts
      <div>
        <textarea></textarea>
        <button>Add new post</button>
      </div>
      <div>new post</div>
      <div className={s.posts}>
        <Post message='1 message'/>
        <Post message='2 message'/>
        <Post message='3 message'/>
        <Post message='4 message'/>
      </div>
    </div>
  )
}