import style from './App.module.css'
import NavBar from './Components/NavBar'
import Cards from './Components/Cards'
import { apiUrl , filterData } from './data'
import { Filter } from './Components/Filter'
import { useEffect } from 'react'
import { useState } from 'react'
import { Loader } from './Components/Loader'

function App() {
  const [coursesData , setCourseData] = useState([])
  const [loader , setLoader] = useState(true);
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
            console.log("Fail to Fetch Data" , error);
        }
        setLoader(false)
    }

    fetchingCourseData()
  } , [])

  return (
    <div className={style.container}>
        <NavBar />
        <Filter filterData={filterData} />
        { loader ? <Loader /> : <Cards coursesData={coursesData}/> }
    </div>
  )
}

export default App
