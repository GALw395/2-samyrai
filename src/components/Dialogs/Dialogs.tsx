import s from './Dialogs.module.css'


export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>Lera</div>
                <div className={s.dialog}>Nastia</div>
                <div className={s.dialog}>Lexa</div>
                <div className={s.dialog}>Marina</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi, Lera</div>
                <div className={s.message}>Hi, Nastia</div>
                <div className={s.message}>Hi, Marina</div>
            </div>

        </div>
    )
}