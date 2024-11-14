// src/App.js
import React from 'react';
import BookList from '../components/BookList';


export const Buscar = ({books, setBooks}) => {
    return (
    <div className='buscar'>
        <h1>Buscar Libros</h1>
        <BookList books={books} setBooks={setBooks}/>
    </div>
    );
};

export default Buscar;

