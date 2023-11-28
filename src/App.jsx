import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Beauty from './pages/Beauty'
import Finance from './pages/Finance'
import Sports from './pages/Sports'
import Technology from './pages/Technology'
import Navbar from './components/Navbar'
import {NewsApiContext, fetchNewsData} from './context/Api'

const App = () => {
  return (
    <div className='font-Poppins'>
      <NewsApiContext.Provider value={{fetchNewsData}}>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/beauty' element={<Beauty/>}/>
          <Route path='/finance' element={<Finance/>}/>
          <Route path='/sports' element={<Sports/>}/>
          <Route path='/technology' element={<Technology/>}/>
        </Routes>
        </BrowserRouter>
      </NewsApiContext.Provider>
    </div>
  )
}

export default App