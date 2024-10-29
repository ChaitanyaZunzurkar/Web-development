import style from './App.module.css'
import NavBar from './Components/NavBar'
import Cards from './Components/Cards'
import { apiUrl , filterData } from './data'
import { Filter } from './Components/Filter'
import { useEffect } from 'react'
import { useState } from 'react'
import { Loader } from './Components/Loader'
import { ToastContainer , toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [coursesData , setCourseData] = useState([])
  const [loader , setLoader] = useState(true);
  const [category , setCategory] = useState(filterData[0].title)

  useEffect(() => {
        setLoader(true);
        const fetchingCourseData = async () => {
        try {
            const response = await fetch(apiUrl);
            if(!response.ok) {
                console.log("Network issue");
            }

            const result = await response.json()
            const data = result.data;
            setCourseData(data)            
        }
        catch (error) {
            toast.warning("Unable to fetch data");
            console.log(error);
        }
        setLoader(false)
    }

    fetchingCourseData()
  } , [])

  return (
    <div className={style.container} >
        <NavBar />
        <Filter filterData={filterData} category={category} setCategory={setCategory} />
        { loader ? <Loader /> : <Cards coursesData={coursesData} category={category} /> }

        <ToastContainer />
    </div>
  )
}

export default App
