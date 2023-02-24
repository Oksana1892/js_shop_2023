import React from 'react';
import style from './Contacts.module.scss';

export const OurContacts = () => {
  return (
    <main className={style.wrapper}>
      <h1>КОНТАКТЫ</h1>
      <h2>Круглосуточный телефон</h2>
      <p> Тел: +7 999 123 56 78</p>
      <h2>E-mail:</h2>
      <p>cvety-onlain@yandex.ru</p>
    </main>
  );
};