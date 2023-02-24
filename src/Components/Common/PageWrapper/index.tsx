import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Nav } from '../Navigation';
import style from './PageWrapper.module.scss';


export const PageWrapper = ()=> {
  return (
    <div className={style.page_wrapper}>
      <Header />
      <Nav/>
      <main>
      <Outlet />
      </main>
      <Footer />
    </div>
  );
};
