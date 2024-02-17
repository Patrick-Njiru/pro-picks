// import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { About, Blog, Contact, Error, Footer, Home, NavBar, Shop } from './pages'

function App() {

  return (
    <div className='app'>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
