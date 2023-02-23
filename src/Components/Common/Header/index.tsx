import React from 'react';
import style from './header.module.scss';

export const Header = () => {
  return <header className={style.header}>
    <span className={style.header_logo}><img src={'/Logo.jpg'} alt = 'img' width = '65px'/>
</span>
<span className={style.header_title}>Цветы онлайн</span>
<span className={style.header_contacts}>+7 999 123 56 78</span>
    <span className={style.header_login}>APP_NAME</span>
    </header>;
};
