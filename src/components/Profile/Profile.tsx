
import { profilePageType } from '../../redux/state'
import { MyPosts } from './MyPosts/MyPosts'
import s from './Profile.module.css'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'

type ProfilePropsType = {
  profilePage: profilePageType
  addPost: () => void
  updateNewPostText: (newText: string) => void
}

export const Profile = (props: ProfilePropsType) => {
  return (
    <div className= {s.content}>
      <ProfileInfo  />    
      <MyPosts 
      posts = {props.profilePage.posts} 
      addPost = {props.addPost} 
      newPostText = {props.profilePage.newPostText}
      updateNewPostText = {props.updateNewPostText}
      />
    </div>
  )
}