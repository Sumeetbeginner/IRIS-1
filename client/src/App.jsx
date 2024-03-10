
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Registration from './components/Authentication/Registration'
import Login from './components/Authentication/Login'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/registration' Component={Registration}/>
        <Route path='/login' Component={Login}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
