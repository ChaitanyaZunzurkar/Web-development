import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Signin from './Components/Signin'
import Signup from './Components/Signup'
// import { useState } from 'react'


function App() {
  return (
    <div>
        <BrowserRouter >
          <Navbar  />
          <Routes >
            <Route index path='/' element={<HomePage />} />
            <Route index path='/api/v1/signin' element={<Signin />} />
            <Route index path='/api/v1/signup' element={<Signup />} />
          </Routes>
          <Footer />
        </BrowserRouter>
    </div>
  )
}

export default App
