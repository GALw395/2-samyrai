import s from './Post.module.css'

type PostPropsType = {
  message: string
  likesCount: string
}

export const Post = (props: PostPropsType) => {
  return (

    <div className={s.item}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVeL90xOLM2FUVcckfFuzKmYmI6LHzFSGug-xxkkWGJw&s" alt='#' />
      {props.message}
      <div>like   {props.likesCount}</div>
    </div>
  )
}