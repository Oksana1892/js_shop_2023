import { routes } from 'Helpers/Constants/routes';
import React from 'react';
import { Link } from 'react-router-dom';
import style from './header.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { UserSelectors, UserSliceActions } from 'Store';
import { FaShoppingCart } from 'react-icons/fa';

export const Header = () => {
  const userEmail = useSelector(UserSelectors.getUserEmail);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(UserSliceActions.clearUserData());
  };
  

  return (
    <header className={style.header}>
      <span className={style.header_logo}>
        <img src={'/Logo.jpg'} alt="img" width="65px" />
      </span>
      <span className={style.header_title}>Цветы онлайн</span>
      <span className={style.header_contacts}>+7 999 123 56 78</span>
      <FaShoppingCart className={style.header_cart_button}
      />
      {userEmail ? (
        <div>
          <span className={style.header_name}>{userEmail}</span>
          <button type="button" onClick={logoutHandler}>
            ВЫЙТИ
          </button>
        </div>
      ) : (
        <Link to={routes.auth} className={style.header_login}>
          Личный кабинет
        </Link>
      )}
    </header>
  );
};
