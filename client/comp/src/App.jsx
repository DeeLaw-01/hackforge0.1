import Navbar from './components/Navbar.jsx'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Home from './components/HomePage/Home.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import Auth from './components/Auth/Auth.jsx'
import useAuthStore from '../UserAuthStore'
export default function App () {
  const user = useAuthStore(state => state.user)
  return (
    <>
      {user && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Navigate to='/' />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/auth' element={<Auth />} />
      </Routes>
    </>
  )
}
