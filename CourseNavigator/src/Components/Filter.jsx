/* eslint-disable react/prop-types */
import style from '../StyleSheets/Filter.module.css'
export const Filter = ({ filterData }) => {
    return (
        <div>
            {
                filterData.map((data) => {
                    return (
                        <button type="button" key={data.id} className={style.btn}>{data.title}</button>
                    )
                })
            }
            
        </div>
    )
}