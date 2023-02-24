import { Main } from 'Containers/Main';
import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { routes } from 'Helpers/Constants/routes';
import { About } from 'Containers/About';
import { Order } from 'Containers/Order';
import { Contacts } from 'Containers/Contacts';
import { Bonus } from 'Containers/Bonus';
import { Auth } from 'Containers/Auth';
import { PageWrapper } from 'Components/Common/PageWrapper';

function App() {
  return (
    <Routes>
      <Route path={routes.main} element={<PageWrapper />}>
        <Route path={routes.auth} element={<Auth />} />
        <Route index element={<Main />} />
        <Route path={routes.order} element={<Order />} />
        <Route path={routes.about} element={<About />} />
        <Route path={routes.contacts} element={<Contacts />} />
        <Route path={routes.bonus} element={<Bonus />} />
      </Route>
    </Routes>
  );
}

export default App;
