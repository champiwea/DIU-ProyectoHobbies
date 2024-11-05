// src/App.js
import React from 'react'
import BookGallery from '../components/BookGallery'


export const MisLecturas = () => {
    return (
    <div className='mis_lecturas'>
        <h1>Mis Lecturas</h1>
        <BookGallery/>
    </div>
    );
};

export default MisLecturas;
