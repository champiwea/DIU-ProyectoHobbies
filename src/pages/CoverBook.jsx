import React, { useState } from 'react';
import Cover from '../assets/cover-codigo-da-vinci.jpeg';
import AddLinear from '../icons/linear/Add';
import ChevronDown from '../icons/linear/ChevronDown';
import ChevronUp from '../icons/linear/ChevronUp';
import AddSolid from '../icons/solid/Check';
import Star from '../icons/solid/Star';

import s from './CoverBook.module.css';

const rating = 3;
const reviews = [
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

export const CoverBook = () => {
  const [isSolid, setIsSolid] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const handleClick = () => {
    setIsSolid(!isSolid);
  };

  const toggleReviews = () => {
    setShowAll(!showAll);
  };

  return (
    <div className={s.page}>
      <div className={s.cover}>
        <img src={Cover} alt="Portada Codigo Da Vinci" width={180} />
        <div className={s.label}>
          <div className={s.title}>Código Da Vinci</div>
          <div className={s.autor}>Dan Brown</div>
        </div>
        <div className={s.stars}>
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              size={24}
              style={{
                color: index < rating ? "#F3D431" : "#EFEFEF",
                marginRight: 4,
              }}
            />
          ))}
        </div>
      </div>
      <button className={s.button} onClick={handleClick}>
        {isSolid ? <AddSolid size={24} style={{ color: 'white' }} /> : <AddLinear size={24} style={{ color: 'white' }} />}
        Añadir Lectura
      </button>
      <div>
        Robert Langdon, profesor de simbología religiosa de la Universidad de Harvard, 
        y Sophie Neveu, experta en criptología de la policía francesa, aúnan sus 
        fuerzas para resolver un misterioso crimen cometido en el Museo de Louvre. 
        Un secreto vital para la humanidad está en peligro. Algunos lucharán por 
        salvaguardarlo. Otros, despiadadamente, por destruirlo.
      </div>
      <div className={s.reviews}>
        <h2>Reseñas</h2>
        <hr className={s.reviewDivider} />
        {reviews.slice(0, showAll ? reviews.length : 2).map((review, index) => (
          <div key={index} className={s.review}>
            <div className={s.reviewHeader}>
              <span className={s.reviewName}>{review.name}</span>
              <div className={s.stars}>
                {[...Array(5)].map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    size={20}
                    style={{
                      color: starIndex < review.rating ? "#F3D431" : "#EFEFEF",
                      marginRight: 4,
                    }}
                  />
                ))}
              </div>
            </div>
            <div className={s.reviewComment}>{review.comment}</div>
            {index < (showAll ? reviews.length - 1 : 1) && <hr className={s.reviewDivider} />}
          </div>
        ))}
        <hr className={s.reviewDivider} />
      </div>
       <button className={s.showMoreButton} onClick={toggleReviews}>
          {showAll ? (
            <>
              Ver menos <ChevronUp size={24} style={{ marginRight: 5 }} />
            </>
          ) : (
            <>
              Ver más <ChevronDown size={24} style={{ marginRight: 5 }} /> 
            </>
          )}
        </button>
      <button className={s.button}>
        Añadir reseña
      </button>
    </div>
  );
};

export default CoverBook;

