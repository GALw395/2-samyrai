
import { MyPostsContainer } from './MyPosts/MyPostsContainer'
import s from './Profile.module.css'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'

type ProfilePropsType = {
  store: any
}

export const Profile = (props: ProfilePropsType) => {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPostsContainer
        store={props.store}
      />
    </div>
  )
}