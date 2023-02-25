
import { Content } from 'Components/Main/Content';
import React from 'react';

export const Main = () => {
  return (
    <div className="page_wrapper">
      <Content   title = {'Розы'} price = {'1000 руб.'} image = {'Rose.jpg'}/>
      <Content   title = {'Гладиолусы'} price = {'500 руб.'} image = {'Gladiolus.jpg'}/>
      <Content   title = {'Лилии'} price = {'800 руб.'} image = {'Lily.jpg'}/>
      <Content   title = {'Тюльпаны'} price = {'300 руб.'} image = {'Tulip.jpg'}/>
    </div>
  );
};
