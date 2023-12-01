import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Sports from './pages/Sports'
import Technology from './pages/Technology'
import Navbar from './components/Navbar'
import {NewsApiContext, fetchNewsData, searchNews, newsCategory} from './context/Api'
import Science from './pages/Science'
import Health from './pages/Health'
import Business from './pages/Business'

const App = () => {
  return (
    <div className='font-Poppins'>
      <NewsApiContext.Provider value={{fetchNewsData, searchNews, newsCategory}}>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/science' element={<Science/>}/>
          <Route path='/health' element={<Health/>}/>
          <Route path='/business' element={<Business/>}/>
          <Route path='/technology' element={<Technology/>}/>
          <Route path='/sports' element={<Sports/>}/>
        </Routes>
        </BrowserRouter>
      </NewsApiContext.Provider>
    </div>
  )
}

export default App