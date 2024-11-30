import { useEffect, useState } from "react";
import axios from "axios";

const Api_key = '80Q279b8CRZeXgzjV0wVOKxNar6PbCqy'
const url = `https://api.giphy.com/v1/gifs/random?api_key=${Api_key}`;

const UseGifs = (tag) => {
    const [gifs , setGifs] = useState('')
    const [loading , setLoading] = useState(false)

    async function fetchData(tag)  {
        setLoading(true)
        
        const {data} = await axios.get(tag ? `${url}&tag=${tag}` : url)
        setGifs(data.data.images.downsized_large.url)
        console.log(data.data.images.downsized_large.url)
        setLoading(false)
    }

    useEffect(() => {
        fetchData(tag)
    } , [])

    return { gifs , loading , fetchData }
}

export default UseGifs