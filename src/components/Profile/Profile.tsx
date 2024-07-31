
import { profilePageType } from '../../redux/store'
import { MyPosts } from './MyPosts/MyPosts'
import s from './Profile.module.css'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'

type ProfilePropsType = {
  profilePage: profilePageType
  dispatch: (action: any) => void
}

export const Profile = (props: ProfilePropsType) => {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts
        posts={props.profilePage.posts}
        newPostText={props.profilePage.newPostText}
        dispatch={props.dispatch}
      />
    </div>
  )
}