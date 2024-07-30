import React from 'react'
import { useNavigate } from 'react-router-dom'

function Logout() {
    let navigate = useNavigate()
    const handleLogOut = ()=>{
        localStorage.setItem('token', '')
        navigate('/login')
    }
  return (
    <button className='btn btn-danger logout' onClick={handleLogOut}>Logout</button>
  )
}

export default Logout