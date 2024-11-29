import { BrowserRouter , Route , Routes } from 'react-router-dom'
import PageNotFound from './Components/PageNotFound'
import HomePage from './Components/HomePage'
import About from './Components/About'
import Contact from './Components/Conatact'
import Navbar from './Components/Navbar'
import Signup from './Components/Signup'
import Dashboard from './Components/Dashboard'
import Login from './Components/Login'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <div>
        <ToastContainer />
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/login' element={<Login />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
