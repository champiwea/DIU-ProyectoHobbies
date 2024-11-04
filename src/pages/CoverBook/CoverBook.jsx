import s from './CoverBook.module.css';

export const CoverBook = () => {
  return(
    <div>
     <div className={s.cover}>
      <img src='/assets/cover-codigo-da-vinci.jpeg' alt="Portada Codigo Da Vinci" width={80} />
     </div>
    </div>
  );
};

export default CoverBook;