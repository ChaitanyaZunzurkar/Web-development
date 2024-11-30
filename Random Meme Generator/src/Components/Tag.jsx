import style from "../Stylesheet/Tag.module.css";
import { ClipLoader } from 'react-spinners';
import { useState } from "react";
import UseGifs from "../CostumHooks/useGIfs";

const Tag = () => {
    // const [gifs , setGifs] = useState('')
    // const [loading , setLoading] = useState(false);
    const [tag , setSearchData] = useState('car')
    
    // async function fetchData() {
    //     setLoading(true)
    //     const Api_key = '80Q279b8CRZeXgzjV0wVOKxNar6PbCqy'
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${Api_key}&tag=${tag}`

    //     const {data} = await axios.get(url);
    //     setGifs(data.data.images.downsized_large.url)
    //     setLoading(false)
    // }

    // useEffect(()=> {
    //     fetchData();
    // } , [])

    const { gifs , loading , fetchData } = UseGifs(tag);
    function changeHandler(event) {
        setSearchData(event.target.value)
        console.log(tag)
    }

    function clickHandler() {
        fetchData();
    }

    return (
        <div className={style.card}>
            <h2>A Random Gif</h2>
            {
                loading ? (<ClipLoader color="#3498db" loading={loading} size={50} />) : <img src={gifs} />
            }
            <input
                type="search"
                name="search"
                id="search"
                placeholder="Search a meme here..."
                onChange={changeHandler}
                value={tag}
            />
            <button className={style.generateBtn} onClick={clickHandler}><b>GENERATE</b></button>
        </div>
  )
}

export default Tag