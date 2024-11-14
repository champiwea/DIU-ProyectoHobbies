import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AddLinear from '../icons/linear/Add';
import ChevronDown from '../icons/linear/ChevronDown';
import ChevronUp from '../icons/linear/ChevronUp';
import AddSolid from '../icons/solid/Check';
import Star from '../icons/solid/Star';
import { useLocation } from 'react-router-dom';


import s from './CoverBook.module.css';

const rating = 3;

export const CoverBook = ({reviews, updateBookStatus}) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const location = useLocation();
  const { book } = location.state || {};

  const bookReviews = reviews.find((reviewGroup) => reviewGroup.id === book.id)?.reviews || [];

  const [isSolid, setIsSolid] = useState(() => book?.estado === 1);
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();
  

  const handleClick = () => {
    setIsSolid(!isSolid);
    console.log(isSolid)

    const newStatus = !isSolid ? 1 : 0; 
    updateBookStatus(book.id, newStatus)
  };

  const toggleReviews = () => {
    setShowAll(!showAll);
  };

  const handleButtonClick = () => {
    navigate('/resenia'); 
  }; 

  return (
    <div className={s.page}>
      <div className={s.cover}>
        <img src={book.cover} width={180} />
        <div className={s.label}>
          <div className={s.title}>{book.title}</div>
          <div className={s.autor}>{book.author}</div>
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
        {book.descrip}
      </div>
      <div className={s.reviews}>
        <h2>Reseñas</h2>
        <hr className={s.reviewDivider} />
        {bookReviews.slice(0, showAll ? bookReviews.length : 2).map((review, index) => (
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
            {index < (showAll ? bookReviews.length - 1 : 1) && <hr className={s.reviewDivider} />}
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
      <button className={s.button} onClick={handleButtonClick}>
        Añadir reseña
      </button>
    </div>
  );
};

export default CoverBook;

