import Header from './Components/Header'
import Blogs from './Components/Blogs'
import { useContext, useEffect } from 'react'
import { AppContext } from './Context/AppContext'
import Pagination from './Components/Pagination'

export const App = () => { 
  const { fetchData , page } = useContext(AppContext)
  
  useEffect(() => {
    fetchData(page)
  } , [page])

  return (
    <div>     
      <Header />
      <Blogs />
      <Pagination />
    </div>
  )
}

export default App

