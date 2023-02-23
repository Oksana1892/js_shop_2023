import React from 'react';
import style from './Posts.module.scss';
import { Link } from "react-router-dom";
import { routes } from 'Helpers/Constants/routes';


export const PostsList = () => {
  return (
    <main className={style.wrapper}>
      <h1>Posts</h1>
      <Link to={routes.main}>go to main</Link>
    </main>
  );
};