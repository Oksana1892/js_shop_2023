import React from 'react';
import style from './About.module.scss';

export const AboutUs = () => {
  return (
    <main className={style.wrapper}>
      <h1>О НАС</h1>
      <p>
        Цветы онлайн – сеть цветочных магазинов, осуществляющая розничную продажу и доставку
        букетов, цветочных корзин и композиций, создаваемых на заказ по Нижнему Новгороду.
      </p>
      <p>
        Мы пытаемся сделать для Вас наиболее простой и приятный способ купить букет: Вы можете
        сделать заказ прямо на сайте или позвонив нашему администратору. Точное выполнение заказа
        гарантируем, а также попытаемся удовлетворить самый изысканный вкус. Авторский дизайн
        каждого букета и бережная сборка нашими флористами не оставит Вас равнодушными. Для Вашего
        удобства работает быстрая служба доставки, позволяющая Вам получить заветный букет уже в
        течении 2 часов. У нас всегда огромный ассортимент свежесрезанных роз, а также большое
        количество других цветов на все случаи жизни и на любой вкус.
      </p>
      <p>Работаем напрямую с лучшими цветочными плантациями России, Эквадора, Кении и Голландии.</p>
    </main>
  );
};
