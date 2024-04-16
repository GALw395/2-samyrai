import s from './Profile.module.css'

export const Profile = () => {
  return (
    <div className= {s.content}>
      <div>
        <img className={s.imgBG} src="https://static-cse.canva.com/blob/685002/vk1524.aa027f62.avif" alt="" />
      </div>
      <div>
        <img className={s.imgAvatar} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJKLA-bQAxJ2YuKnn2En4cyxW8CowV4Q6kc_7GCJxDWg&s" alt="" />
      </div>
      <div>my posts
        <div>new post</div>
        <div className={s.posts}>
          <div className={s.item}>post1</div>
          <div className={s.item}>post2</div>
          <div className={s.item}>post3</div>
        </div>
      </div>
      <div></div>
    </div>
  )
}