import Navbar from './components/Navbar.jsx'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Home from './components/HomePage/Home.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import Auth from './components/Auth/Auth.jsx'

export default function App () {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Navigate to='/' />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/auth' element={<Auth />} />
      </Routes>
    </>
  )
}
