
import { profilePageType } from '../../redux/state'
import { MyPosts } from './MyPosts/MyPosts'
import s from './Profile.module.css'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'

type ProfilePropsType = {
  state: profilePageType
}

export const Profile = (props: ProfilePropsType) => {
  return (
    <div className= {s.content}>
      <ProfileInfo  />    
      <MyPosts posts={props.state.posts}/>
    </div>
  )
}