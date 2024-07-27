
import { PostPropsType } from '../../../App'
import s from './MyPosts.module.css'
import { Post } from './Post/Post'

type MyPostsPropsType = {
  posts: PostPropsType[]
}

export const MyPosts = (props: MyPostsPropsType) => {

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