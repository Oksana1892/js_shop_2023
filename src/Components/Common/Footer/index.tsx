import React from 'react';
import style from './footer.module.scss'

export const Footer = () => {
  return <footer className={style.footer}>
    <span className={style.footer_text}>Доставка цветов в Нижнем Новгороде</span>
    <span className={style.footer_contacts}>Заказ по телефону +7 999 123 56 78</span>
    <span className={style.footer_order}>Круглосуточно</span>
    </footer>;
};
