import s from './MyPosts.module.css'
import { Post } from './Post/Post'

export const MyPosts = () => {


let postData = [
  {id: '1', message: 'message #1', likesCount: '12'},
  {id: '2', message: 'message #2', likesCount: '43'},
  {id: '3', message: 'message #3', likesCount: '143'},
  {id: '4', message: 'message #4', likesCount: '43'},
]



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
        <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
        <Post message={postData[1].message} likesCount={postData[1].likesCount}/>
        <Post message={postData[2].message} likesCount={postData[2].likesCount}/>
        <Post message={postData[3].message} likesCount={postData[3].likesCount}/>
      </div>
    </div>
  )
}