import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Portfilio from './Components/Portfilio'
import Experiance from './Components/Experiance'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <>
   <div>
   <Navbar />
     <Home/>
     <About/>
     <Portfilio/>
     <Experiance/>
     <Contact/>
     <Footer/>
   </div>
   <Toaster/>
    </>
  )
}

export default App