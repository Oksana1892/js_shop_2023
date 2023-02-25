import React, { useState } from "react";
import style from './Content.module.scss'

type CounterPropsType = {
  title: string;
  count?: number;
  price?: number;
  image: string;
};

export const Content =(props: CounterPropsType)  => {
  const { title, price, image } = props;
  const [count, setCount] = useState(0);
  const [productAdd, setProductAdd] = useState(false);

  const incrementHandler = () => {
    setCount((prev) => prev + 1);
  };
  const decrementHandler = ()=> {
    setCount((prev) => prev - 1);
  };

  const addToCart = () => {
    setProductAdd((prevState) => !prevState);
  };

    return (
      <main className={style.content}>
        <div className={productAdd ? `${style.wrapper_active}` : `${style.product}`}>
        <img className={style.img} src = {image} alt = 'img' />
        <div className={style.title}>{title}</div>
        <div className={style.price}>{price} руб/шт</div>
        <div className={style.counter_group}> 
          <button className={style.counter_button} disabled = {count === 0} onClick={decrementHandler}>-</button>
          <h2>{count}</h2>
          <button className={style.counter_button} onClick = {incrementHandler}>+</button>
          </div>
          <button className={style.counter_button} onClick = {addToCart}> {productAdd ? 'УДАЛИТЬ' : 'В КОРЗИНУ'}</button>
          </div>
      </main>
    );
  };

  