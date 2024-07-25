import { NavLink } from 'react-router-dom'
import s from './../Dialogs.module.css'
import { DialogItemPropsType } from '../../..'




export const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id}>
                {props.name}
            </NavLink>
        </div>
    )
}