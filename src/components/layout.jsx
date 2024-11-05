import React, {useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CoverBook from '../pages/CoverBook';
import HomePage from '../pages/home_page';
import LightbulbPage from '../pages/lightbulb_page';
import ReseniaPage from '../pages/resenia_page'
import NavBar from '../components/nav_bar';
import Navbar2 from '../components/nav_bar2';
import MisLecturas from '../pages/mis_lecturas'
import Buscar from '../pages/buscar'

const defaultReviews = [
  {
    name: "Juan Pérez",
    rating: 5,
    comment: "Una obra maestra, me atrapó desde la primera página.",
  },
  {
    name: "María López",
    rating: 4,
    comment: "Muy interesante, aunque un poco predecible en algunas partes.",
  },
  {
    name: "Carlos Ruiz",
    rating: 3,
    comment: "Buena lectura, pero no tan emocionante como esperaba.",
  },
  {
    name: "Ana Gómez",
    rating: 4,
    comment: "Disfruté cada página, llena de intriga.",
  },
  {
    name: "Pedro Martínez",
    rating: 5,
    comment: "Una historia fascinante, muy recomendable.",
  },
];


const Layout = () => {
  const [reviews, setReviews] = useState(defaultReviews);

  return (
    <BrowserRouter>
      <div className='layout'>
        {/* <h1 className='layout__title'>Interfaz energética</h1> */}
        <Navbar2 />
        <div className='layout__page'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/lightbulb' element={<LightbulbPage />} />
            <Route path='/buscar' element={<Buscar/>} />
            <Route path='/resenia' element= {<ReseniaPage/>} />
            <Route path='/mis_lecturas' element= {<MisLecturas/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Layout
