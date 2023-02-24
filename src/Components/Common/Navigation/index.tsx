import { routes } from 'Helpers/Constants/routes';
import React from 'react';
import style from './navigation.module.scss';
import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav className={style.wrapper}>
      <ul>
        <li>
          <Link to={routes.main}>КАТАЛОГ</Link>
        </li>
        <li>
          <Link to={routes.order}>ОПЛАТА И ДОСТАВКА</Link>
        </li>
        <li>
        <Link to={routes.about}>О НАС</Link>
            </li>
        <li>
        <Link to={routes.contacts}>КОНТАКТЫ</Link>
            </li>
            <li>
            <Link to={routes.bonus}>БОНУСЫ</Link>
            </li>
      </ul>
    </nav>
  );
};
