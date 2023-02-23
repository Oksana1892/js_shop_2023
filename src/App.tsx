import { Main } from 'Containers/Main';
import { Posts } from 'Containers/Posts';
import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { routes } from 'Helpers/Constants/routes';
import { About } from 'Containers/About';
import { Order } from 'Containers/Order';
import { Contacts } from 'Containers/Contacts';



function App() {
  return <Routes>
    <Route path={routes.main} element={<Main />} />
      <Route path={routes.posts} element={<Posts />} />
      <Route path={routes.order} element={<Order />} />
      <Route path={routes.about} element={<About />} />
      <Route path={routes.contacts} element={<Contacts/>} />
  </Routes>
}
    


export default App;