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

// const defaultReviews = [
//   {
//     name: "Juan Pérez",
//     rating: 5,
//     comment: "Una obra maestra, me atrapó desde la primera página.",
//   },
//   {
//     name: "María López",
//     rating: 4,
//     comment: "Muy interesante, aunque un poco predecible en algunas partes.",
//   },
//   {
//     name: "Carlos Ruiz",
//     rating: 3,
//     comment: "Buena lectura, pero no tan emocionante como esperaba.",
//   },
//   {
//     name: "Ana Gómez",
//     rating: 4,
//     comment: "Disfruté cada página, llena de intriga.",
//   },
//   {
//     name: "Pedro Martínez",
//     rating: 5,
//     comment: "Una historia fascinante, muy recomendable.",
//   },
// ];

const defaultReviews = [
  {
    id: 1,
    reviews: [
      { name: "Laura Estrada", rating: 5, comment: "Un viaje único, inolvidable de principio a fin." },
      { name: "Miguel Torres", rating: 4, comment: "Interesante y profundo, aunque algo complejo en algunas partes." },
      { name: "Sofía Reyes", rating: 5, comment: "Cada capítulo es mejor que el anterior, lo disfruté mucho." },
      { name: "Daniel Ríos", rating: 3, comment: "Entretenido, pero un poco largo para mi gusto." },
      { name: "Patricia Varela", rating: 4, comment: "Excelente narrativa, aunque la trama es algo densa." },
    ],
  },
  {
    id: 2,
    reviews: [
      { name: "Luis Martínez", rating: 5, comment: "Inspirador y conmovedor, una verdadera joya." },
      { name: "Andrea Silva", rating: 4, comment: "Me gustó, aunque esperaba un poco más de acción." },
      { name: "Javier Díaz", rating: 3, comment: "Interesante, pero difícil de seguir en algunos capítulos." },
      { name: "Camila Herrera", rating: 5, comment: "Una obra que invita a reflexionar profundamente." },
      { name: "Felipe González", rating: 4, comment: "Muy bueno, pero algo repetitivo en ciertas partes." },
    ],
  },
  {
    id: 3,
    reviews: [
      { name: "Isabel Peña", rating: 4, comment: "Trama intrigante, aunque me costó engancharme al principio." },
      { name: "Raúl Rivas", rating: 5, comment: "Lo recomiendo, tiene giros inesperados y personajes profundos." },
      { name: "Verónica Sáez", rating: 3, comment: "Bueno, pero algunos detalles son predecibles." },
      { name: "Fernando Ortiz", rating: 4, comment: "Entretenido y bien escrito, ideal para una tarde." },
      { name: "Lorena Ramos", rating: 5, comment: "Me sorprendió mucho, no esperaba que fuera tan bueno." },
    ],
  },
  {
    id: 4,
    reviews: [
      { name: "Roberto Soto", rating: 3, comment: "Entretenido, pero no tan memorable como esperaba." },
      { name: "Marta Fernández", rating: 4, comment: "Buena historia, aunque algunos personajes no me convencieron." },
      { name: "Cristina Vega", rating: 5, comment: "Lo disfruté muchísimo, tiene una profundidad inesperada." },
      { name: "Carlos Álvarez", rating: 4, comment: "Excelente, con algunos momentos realmente emotivos." },
      { name: "Gabriela Valdés", rating: 3, comment: "Interesante, aunque esperaba más desarrollo en el final." },
    ],
  },
  {
    id: 5,
    reviews: [
      { name: "Esteban Muñoz", rating: 5, comment: "Un clásico moderno, de esos libros que te marcan." },
      { name: "Laura Quintana", rating: 4, comment: "Buena trama, aunque algo lenta al inicio." },
      { name: "Tomás Morales", rating: 5, comment: "Me encantó, perfecto para quienes buscan algo profundo." },
      { name: "Marcela Acuña", rating: 3, comment: "Interesante, pero sentí que faltó desarrollo en algunos temas." },
      { name: "José Reyes", rating: 4, comment: "Me sorprendió gratamente, definitivamente lo recomiendo." },
    ],
  },
  {
    id: 6,
    reviews: [
      { name: "Lucía Campos", rating: 4, comment: "Una historia conmovedora, aunque el final es predecible." },
      { name: "Francisco Guzmán", rating: 5, comment: "Emocionante y bien escrito, no pude dejar de leer." },
      { name: "Carolina Vargas", rating: 3, comment: "Entretenido, pero le faltó profundidad en los personajes." },
      { name: "Pablo Figueroa", rating: 4, comment: "Una lectura ligera y entretenida, ideal para el verano." },
      { name: "Isabel Núñez", rating: 5, comment: "Me encantó, tiene una narrativa atrapante y muy emotiva." },
    ],
  },
  {
    id: 7,
    reviews: [
      { name: "Rodrigo Salinas", rating: 5, comment: "Simplemente espectacular, cada página es mejor que la anterior." },
      { name: "Alejandra Fuentes", rating: 4, comment: "Buena lectura, aunque algunos giros son predecibles." },
      { name: "David Castro", rating: 3, comment: "Interesante pero lento, me costó engancharme." },
      { name: "Claudia Escobar", rating: 5, comment: "Perfecto para quienes buscan una historia bien desarrollada." },
      { name: "Elena Ríos", rating: 4, comment: "Una historia apasionante, aunque no es para todos los gustos." },
    ],
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
