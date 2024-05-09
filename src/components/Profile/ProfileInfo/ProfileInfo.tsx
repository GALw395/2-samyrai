import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img className={s.imgBG} src="https://static-cse.canva.com/blob/685002/vk1524.aa027f62.avif" alt="" />
      </div>
      <div className={s.descriptionBlock}>ava + description</div>
    </div>
  )
}