
import { PostPropsType } from '../../App'
import { MyPosts } from './MyPosts/MyPosts'
import s from './Profile.module.css'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'


type ProfilePropsType = {
  posts: PostPropsType[]
}

export const Profile = (props: ProfilePropsType) => {
  return (
    <div className= {s.content}>
      <ProfileInfo  />    
      <MyPosts posts={props.posts}/>
    </div>
  )
}