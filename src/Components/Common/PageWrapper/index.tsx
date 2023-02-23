import React from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Nav } from '../Navigation';
import style from './PageWrapper.module.scss';

type PageWrapperProps = {
  children: React.ReactNode;
};

export const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <div className={style.page_wrapper}>
      <Header />
      <Nav/>
      {children}
      <Footer />
    </div>
  );
};
