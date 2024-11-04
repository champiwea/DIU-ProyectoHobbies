import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home_page'
import LightbulbPage from '../pages/lightbulb_page'
import ReseniaPage from '../pages/resenia_page'

import NavBar from '../components/nav_bar'

const Layout = () => {
  return (
    <BrowserRouter>
      <div className='layout'>
        {/* <h1 className='layout__title'>Interfaz energética</h1> */}
        <NavBar />
        <div className='layout__page'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/lightbulb' element={<LightbulbPage />} />
            <Route path='/resenia' element= {<ReseniaPage/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Layout
