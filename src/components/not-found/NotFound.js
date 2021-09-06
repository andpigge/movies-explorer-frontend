import React from 'react';
import { useHistory  } from 'react-router-dom';
import './notFound.css';

function NotFound() {
  const history = useHistory();
  const goBack = () => {
    return history.goBack();
  };

  return (
    <main className='not-found'>
      <section className='error-message not-found__margin-center'>
        <div className='error-message__content'>
          <h1 className='error-message__title'>
            404
          </h1>
          <p className='error-message__desc'>
            Страница не найдена
          </p>
        </div>
        <button onClick={ goBack } className='error-message__go-back'>
          Назад
        </button>
      </section>
    </main>
  );
}

export default NotFound;
