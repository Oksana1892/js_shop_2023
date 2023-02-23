import React from 'react';
import style from './Contacts.module.scss';

export const OurContacts = () => {
  return (
    <main className={style.wrapper}>
      <h1>КОНТАКТЫ</h1>
      <p>Круглосуточный телефон</p>
      <p> Тел: +7 999 123 56 78</p>
      <p>E-mail:</p>
      <p>cvety-onlain@yandex.ru</p>
    </main>
  );
};