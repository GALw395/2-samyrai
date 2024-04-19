import { MyPosts } from './MyPosts/MyPosts'
import s from './Profile.module.css'

export const Profile = () => {
  return (
    <div className= {s.content}>
      <div>
        <img className={s.imgBG} src="https://static-cse.canva.com/blob/685002/vk1524.aa027f62.avif" alt="" />
      </div>
      <MyPosts />
      <div></div>
    </div>
  )
}