import './App.css'
import ToDo from './Components/ToDo'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Signup from './Components/Signup';
import Signin from './Components/Signin';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index path='/' element={<Home />} /> 
          <Route path='/user/todo' element={<ToDo />} />
          <Route path='/user/signin' element={<Signin />} />
          <Route path='/user/signup' element={<Signup />} />
          {/* <Route path='*' element={<PageNotFound />} />  */}
        </Routes>
      </BrowserRouter> 
    </div>  
  )
}

export default App
