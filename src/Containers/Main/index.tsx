
import { Content } from 'Components/Main/Content';
import React from 'react';

export const Main = () => {
  return (
    <div className="page_wrapper">
      <Content title= {'Розы'}  />
      <Content title= {'Гладиолусы'} />
      <Content title= {'Лилии'} />
      <Content title= {'Орхидеи'} />
      <Content title= {'Тюльпаны'} /> 
    </div>
  );
};
