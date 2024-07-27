import { NavLink } from 'react-router-dom'
import s from './../Dialogs.module.css'
import { dialogType } from '../../../redux/state'



export const DialogItem = (props: dialogType) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id}>
                {props.name}
            </NavLink>
        </div>
    )
}