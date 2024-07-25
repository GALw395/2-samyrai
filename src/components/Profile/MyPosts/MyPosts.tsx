import s from './MyPosts.module.css'
import { Post } from './Post/Post'

export const MyPosts = () => {


let posts = [
  {id: '1', message: 'message #1', likesCount: '12'},
  {id: '2', message: 'message #2', likesCount: '43'},
  {id: '3', message: 'message #3', likesCount: '143'},
  {id: '4', message: 'message #4', likesCount: '43'},
]

let postsElements =  posts.map( el => <Post message={el.message} likesCount={el.likesCount}/> )



  return (

    <div className={s.postBlockStyle}>
      <h3>my posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <button>Add new post</button>
      </div>
      <div>new post</div>
      <div className={s.posts}>
          {postsElements}
      </div>
    </div>
  )
}