/* eslint-disable react/prop-types */
import style from '../StyleSheets/Filter.module.css'
export const Filter = (props) => {
    const filterData = props.filterData;
    const category = props.category;
    const setCategory = props.setCategory;

    function filterHandler(title) {
        setCategory(title)
    }

    return (
        <div>
            {
                filterData.map((data) => {
                    return (
                        <button type="button" key={data.id} className={style.btn} onClick={() => filterHandler(data.title)}
                            style={{
                                border: category === data.title ? '2px solid white' : '2px solid transparent'
                            }}                        
                        >
                            {data.title}
                        </button>
                    )
                })
            }
            
        </div>
    )
}