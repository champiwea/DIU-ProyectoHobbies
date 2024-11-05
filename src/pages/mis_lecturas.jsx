// src/App.js
import React from 'react'
import BookGallery from '../components/BookGallery'


export const MisLecturas = ({books, setBooks}) => {
    return (
    <div className='mis_lecturas'>
        <h1>Mis Lecturas</h1>
        <BookGallery books={books} setBooks={setBooks}/>
    </div>
    );
};

export default MisLecturas;
