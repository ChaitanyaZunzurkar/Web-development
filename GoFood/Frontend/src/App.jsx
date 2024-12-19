import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Signin from './Components/Signin'
import Signup from './Components/Signup'
import AppContextProvider from './Context/AppContext'
import Cart from './Components/Cart'
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <BrowserRouter >
        <AppContextProvider >
          <Toaster /> 
          <Navbar  />
          <Routes >
            <Route index path='/' element={<HomePage />} />
            <Route path='/api/v1/signin' element={<Signin />} />
            <Route path='/api/v1/signup' element={<Signup />} />
            <Route path='/api/v1/cart' element={<Cart />} />
          </Routes>
          <Footer />
        </AppContextProvider>
      </BrowserRouter>

      <Toaster />
    </div>
  )
}

export default App
