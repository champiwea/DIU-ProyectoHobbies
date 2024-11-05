// src/App.js
import React from 'react'
import BookList from '../components/BookList'


export const Buscar = () => {
    return (
    <div className='buscar'>
        <h1>Buscar Libros</h1>
        <BookList />
    </div>
    );
};

export default Buscar;

