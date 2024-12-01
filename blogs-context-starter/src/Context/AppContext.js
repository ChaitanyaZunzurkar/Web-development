import { createContext , useState } from "react"
import { baseUrl } from "../baseUrl";
import axios from "axios";

export const AppContext = createContext();

const AppContextProvider = ({children}) => {
    const [loading , setLoading] = useState(false);
    const [page , setPage] = useState(1);
    const [totalPages , setTotalPages] = useState(null);
    const [posts , setPosts] = useState([])

    async function fetchData(page = 1) {
        setLoading(true)
        try {
            let url = `${baseUrl}?page=${page}`
            let { data } = await axios.get(url);

            console.log(url);
            setPage(data.page)
            setTotalPages(data.totalPages)
            setPosts(data.posts)
            console.log(data)
        }
        catch {
            console.log("Error occured while fetching the data.");
            setPage(1)
            setTotalPages(null)
            setPosts([])
        }
        setLoading(false)
    }

    function clickHandler(page) {
      setPage(page)
      fetchData(page)
    }

    const requiredValue = {
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        posts,
        setPosts,
        fetchData,
        clickHandler
    }
    
    return <AppContext.Provider value={requiredValue}>
        {children}
    </AppContext.Provider>
}

export default AppContextProvider