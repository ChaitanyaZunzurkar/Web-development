import { useEffect, useState } from "react";
import style from "../Stylesheet/Random.module.css";
import axios from "axios";
import { ClipLoader } from 'react-spinners';

const Random = () => {
    const [gifs , setGifs] = useState('')
    const [loading , setLoading] = useState(false)

    async function fetchData()  {
        setLoading(true)
        const Api_key = '80Q279b8CRZeXgzjV0wVOKxNar6PbCqy'
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${Api_key}`;
        
        const {data} = await axios.get(url)
        setGifs(data.data.images.downsized_large.url)
        console.log(data.data.images.downsized_large.url)
        setLoading(false)
    }
    
    function clickHandler() {
       fetchData();
    }

    useEffect(() => {
        fetchData()
    } , [])

    return (
        <div className={style.card}>
            <h2>A Random Gif</h2>
            {
                loading ? (<ClipLoader color="#3498db" loading={loading} size={50} />) : <img src={gifs} />
            }
            <button className={style.generateBtn} onClick={clickHandler}><b>GENERATE</b></button>
        </div>
    )
}

export default Random