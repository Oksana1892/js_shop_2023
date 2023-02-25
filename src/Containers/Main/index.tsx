
import { Content } from 'Components/Main/Content';
import React from 'react';

export const Main = () => {
  return (
    <div className="page_wrapper">
      <Content   title = {'Розы'} price = {200} image = {'Rose.jpg'}/>
      <Content   title = {'Гладиолусы'} price = {300} image = {'Gladiolus.jpg'}/>
      <Content   title = {'Лилии'} price = {500} image = {'Lily.jpg'}/>
      <Content   title = {'Тюльпаны'} price = {100} image = {'Tulip.jpg'}/>
    </div>
  );
};
