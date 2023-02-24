import React, { useState } from "react";
import style from './Content.module.scss'

type CounterPropsType = {
  title: string;
  count?: number;
};
export const Content = (props: CounterPropsType) => {
  const { title } = props;

  const [count, setCount] = useState(0);

  const incrementHandler = () => {
    setCount((prev) => prev + 1);
  };
  const decrementHandler = ()=> {
    setCount((prev) => prev - 1);
  }

    return (
      <main className={style.content}>
        <div className={style.product}>
          <h3> {title}</h3>
          <img className={style.img} src='/Rose.jpg' alt="Rose" /> 
          <div className={style.counter_group}> 
          <button disabled = {count === 0} onClick={decrementHandler}>-</button>
          <h3>{count}</h3>
          <button onClick = {incrementHandler}>+</button>
          </div> 
        </div>
      </main>
    );
  };

  