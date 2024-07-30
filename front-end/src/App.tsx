import React, { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Router } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import TodoPage from './pages/TodoPage'
import './style.css'
const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/login' Component={LoginPage}></Route>
        <Route path='/register' Component={RegisterPage}></Route>
        <Route path='/todos' Component={TodoPage}></Route>
        <Route path='/' Component={LoginPage}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App