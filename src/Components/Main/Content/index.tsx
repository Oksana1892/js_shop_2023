import React, { useState } from "react";
import style from './Content.module.scss'

type CounterPropsType = {
  title: string;
  count?: number;
  price: string;
  image: string;
};


export const Content =(props: CounterPropsType)  => {
  const { title, price, image } = props;
  const [count, setCount] = useState(0);

  const incrementHandler = () => {
    setCount((prev) => prev + 1);
  };
  const decrementHandler = ()=> {
    setCount((prev) => prev - 1);
  }

    return (
      <main className={style.content}>
        <ul>
          <li className={style.product}>
            <img src = {image} alt = 'img' />
            <h1>{title}</h1>
            <h2>{price}</h2>
        <div className={style.counter_group}> 
          <button disabled = {count === 0} onClick={decrementHandler}>-</button>
          <h3>{count}</h3>
          <button onClick = {incrementHandler}>+</button>
          </div>
          </li>
          </ul>
      </main>
    );
  };

  