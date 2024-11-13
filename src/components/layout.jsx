import React, {useState} from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

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

const defaultBooks = [
  {
      id:1,
      estado: 1,
      title: 'El Hobbit',
      author: 'J.R.R. Tolken',
      cover: 'https://books.google.cl/books/content?id=xi2URRig7jYC&hl=es&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U1wnBD2F9rEpMP3BAF8zPO8y3hnqw&w=1280',
      descrip: 'Un gran clásico moderno y el preludio a las vastas y poderosas mitologías de El Señor de Los Anillos.. Cuando alrededor de 1930, J. R. R. Tolkien comenzó a escribir El hobbit, hacía ya diez años que trabajaba en el vasto panorama mitológico de El Libro de los Relatos, que más tarde se llamaría El Silmarillion.'
  },
  {
      id:2,
      estado:1,
      title: 'Odisea',
      author: 'Homero',
      cover: 'https://felpecta.cl/cdn/shop/files/homero-clasicos-odisea-austral-38088834187413_1800x.jpg?v=1695401105',
      descrip: 'Ulises, uno de los héroes griegos que participa en la guerra y responsable de la estratagema del caballo de Troya, para volver a su reino junto a su mujer Penélope y su hijo Telémaco.Este viaje durará diez largos años, que se sumarán a los diez ya transcurridos batallando en la guerra de Troya, y será una auténtica odisea en la que le sucederán un sinfín de peripecias gracias a las cuales Ulises «aprende» y evoluciona.'
      },
  {
      id:3,
      estado:1,
      title: 'Harry Potter y la piedra filosofal',
      author: 'J.K Rowling',
      cover: 'https://http2.mlstatic.com/D_NQ_NP_685921-MLU77516556359_072024-O.webp',
      descrip: 'Harry vive con sus horribles nos y su insoportable primo Dudley hasta que su ingreso en el Colegio Hogwarts de Magia y Hechicería cambia su vida para siempre. Allí aprenderá trucos y encantamientos fabulosos, y hará un puñado de buenos amigos... aunque también algunos temibles enemigos. Y, sobre todo, conocerá los secretos que lo ayudarán a cumplir con su destino'

  },
  {
    id:4,
    estado:0,
    title: 'Harry Potter y la cámara secreta',
    author: 'J.K Rowling',
    cover: 'https://images.cdn2.buscalibre.com/fit-in/360x360/ad/4d/ad4df4ba516014a9fc39a0288a70957f.jpg',
    descrip: 'Mientras Harry espera impaciente en casa de sus insoportables tíos el inicio del segundo curso del Colegio Hogwarts de Magia y Hechicería, un elfo aparece en su habitación y le advierte de que una amenaza mortal se cierne sobre la escuela. Harry no se lo piensa dos veces y, acompañado de Ron, se dirige a Hogwarts en un coche volador. Pero, ¿puede un aprendiz de mago defender la escuela de los malvados que pretenden destruirla? Sin saber que alguien ha abierto la Cámara de los Secretos, dejando escapar una serie de monstruos peligrosos, Harry y sus amigos Ron y Hermione tendrán que enfrentarse con arañas gigantes, serpientes encantadas, fantasmas enfurecidos y, sobre todo, con la mismísima reencarnación de su más temible adversario.'
},
{
    id:5,
    estado:0,
    title: 'El Código Da Vinci',
    author: 'Dan Brown',
    cover: 'https://intothebooksheart.com/wp-content/uploads/2017/02/918tCwcm4L.jpg',
    descrip: `Robert Langdon recibe una llamada en mitad de la noche: el conservador del museo del Louvre ha sido asesinado en extrañas circunstancias y junto a su cadáver ha aparecido un desconcertante mensaje cifrado. Al profundizar en la investigación, Langdon, experto en simbología, averigua que las pistas conducen a las obras de Leonardo Da Vinci... y que están a la vista de todos, ocultas por el ingenio del pintor.`
},
{
    id:6,
    estado:0,
    title: 'El Extranjero',
    author: 'Albert Camus',
    cover: 'https://images.cdn2.buscalibre.com/fit-in/360x360/0d/30/0d30665fd8b3d4e5860cd17a4d9fddcd.jpg',
    descrip: ' El extranjero retrata la vida en Argel de un joven oficinista llamado Meursault. Sus días transcurren entre personajes turbios y rutinas primarias, sin que lo perturben siquiera la muerte de su madre o el amor de una muchacha. Pero, cuando comete un asesinato impulsivo, Meursault descubre que la sociedad está dispuesta a condenarlo no solo por ese acto aberrante, sino por su vida ajena a todo. '
},
{
    id:7,
    estado:0,
    title: 'El Túnel',
    author: 'Ernesto Sábato',
    cover: 'https://www.sueñosdepapel.cl/cdn/shop/products/tunel.webp?v=1680098095',
    descrip: 'Esta novela, de estructura casi policial, presenta en el personaje de María Iribarne las zonas ocultas de misterio que impulsarán a Juan Pablo Castel a asesinarla. El creador pintor en este caso al dar forma a su obsesión interna debe renunciar a cualquier otra opción, en un proceso a la vez constructivo y destructivo que centrará el análisis de las motivaciones del crimen.'
}
];

const LayoutContent = ({ reviews, setReviews, books, setBooks, updateBookStatus }) => {
  const location = useLocation(); 

  return (
    <div className='layout'>
      {/* Verifica si la ruta actual es /mis_lecturas */}
      {location.pathname === '/' ? <NavBar /> : <Navbar2 />}
      
      <div className='layout__page'>
        <Routes>
          <Route path='/lightbulb' element={<LightbulbPage />} />
          <Route path='/buscar' element={<Buscar books={books} setBooks={setBooks} />} />
          <Route path='/' element={<MisLecturas books={books} setBooks={setBooks} />} />
          <Route path='/resenia' element={<ReseniaPage setReviews={setReviews} />} />
          <Route path='/coverbook' element={<CoverBook reviews={reviews} setReviews={setReviews} updateBookStatus={updateBookStatus} />} />
        </Routes>
      </div>
    </div>
  );
};

const Layout = () => {
  const [reviews, setReviews] = useState(defaultReviews);
  const [books, setBooks] = useState(defaultBooks);

  const updateBookStatus = (bookId, newStatus) => {
    setBooks(prevBooks =>
      prevBooks.map(book =>
        book.id === bookId ? { ...book, estado: newStatus } : book
      )
    );
  };

  return (
    <BrowserRouter>
      <LayoutContent 
        reviews={reviews} 
        setReviews={setReviews} 
        books={books} 
        setBooks={setBooks} 
        updateBookStatus={updateBookStatus} 
      />
    </BrowserRouter>
  );
};



export default Layout
