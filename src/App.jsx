import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './Components/Header/Contact/Contact'
import Nav from './Components/Nav/Nav'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Nav/>}/>
          <Route path='/Home' element={<Nav/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App