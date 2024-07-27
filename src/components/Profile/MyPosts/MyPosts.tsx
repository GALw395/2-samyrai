
import { profilePageType } from '../../../redux/state'
import s from './MyPosts.module.css'
import { Post } from './Post/Post'


export const MyPosts = (props: profilePageType) => {

  let postsElements = props.posts.map(el => <Post message={el.message} likesCount={el.likesCount} />)



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