import React from 'react'
import { Button } from './components/ui/button'
import { BrowserRouter, Routes , Route, Navigate } from 'react-router-dom'
import Chat from './pages/chat'
import Profile from './pages/Profile'
import Auth from './pages/auth'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/auth' element={<Auth/>} /> 
      <Route path='*' element={<Navigate to="/auth" />} />
      <Route path='/profile' element={<Profile/>} /> 
      <Route path='/chat' element={<Chat/>} /> 
    </Routes>
    </BrowserRouter>
  )
}

export default App
