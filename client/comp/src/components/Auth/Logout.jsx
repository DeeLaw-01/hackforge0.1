import React from 'react'
import useAuthStore from '../../../UserAuthStore'
import { useNavigate } from 'react-router-dom'
const Logout = () => {
  const navigate = useNavigate()
  const logout = useAuthStore(state => state.logout)
  const handleLogout = () => {
    logout()
    navigate('/auth')
  }
  return (
    <button className='mt-20 text-white' onClick={handleLogout}>
      Logout
    </button>
  )
}

export default Logout
