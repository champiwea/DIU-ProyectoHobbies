import React from 'react';
import { Text } from '../../components';
import Star from '../../icons/solid/Star';
import s from './CoverBook.module.css';

const rating = 3;

export const CoverBook = () => {
  return(
    <div>
     <div className={s.cover}>
      <img src='/assets/cover-codigo-da-vinci.jpeg' alt="Portada Codigo Da Vinci" width={80} />
      <Text>Código Da Vinci</Text>
      <Text>Dan Brown</Text>
          <div style={{ display: "flex" }}>
      <div style={{ display: "flex" }}>
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          size={24}
          style={{ 
            color: index < rating ? "yellow" : "gray",
            marginRight: 4 
          }}
        />
      ))}
    </div>
    <Button>
      Añadir Lectura
    </Button>
    <Text>
      Robert Langdon, profesor de simbología religiosa de la Universidad de Harvard, 
      y Sophie Neveu, experta en criptología de la policía francesa, aúnan sus 
      fuerzas para resolver un misterioso crimen cometido en el Museo de Louvre. 
      Un secreto vital para la humanidad está en peligro. Algunos lucharán por 
      salvaguardarlo. Otros, despiadadamente, por destruirlo.
    </Text>
    </div>
     </div>
    </div>
  );
};

export default CoverBook