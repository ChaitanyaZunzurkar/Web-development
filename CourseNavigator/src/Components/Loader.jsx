import style from '../StyleSheets/Loader.module.css'
export const Loader = () => {
    return (
        <div className={style.container}>
            <div className={style.loader}></div>
            <strong>Loading....</strong>
        </div>
    )
}