import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CoverBook from '../pages/CoverBook/CoverBook';
import HomePage from '../pages/home_page';
import LightbulbPage from '../pages/lightbulb_page';

import NavBar from '../components/nav_bar';

const Layout = () => {
  return (
    <BrowserRouter>
      <div className='layout'>
        <h1 className='layout__title'>Interfaz energética</h1>
        <NavBar />
        <div className='layout__page'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/lightbulb' element={<LightbulbPage />} />
            <Route path='/coverbook' element={<CoverBook />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Layout
