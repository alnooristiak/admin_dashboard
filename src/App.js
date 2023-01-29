import React from 'react';
import { Route, Routes } from 'react-router';
import { productInputs, userInputs } from './formSource';
import Home from './pages/home/Home';
import List from './pages/list/List';
import Login from './pages/login/Login';
import New from './pages/new/New';
import Single from './pages/single/Single';
import './App.css';

const App = () => {
  return (
    <div className='app dark'>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="login" element={ <Login /> } />
        <Route path="users">
          <Route index element={<List />} />
          <Route path=':userId' element={<Single />} />
          <Route path='new' element={<New inputs={userInputs} title="Add New User" />} />
        </Route>
        <Route path="products">
          <Route index element={<List />} />
          <Route path=':productsId' element={<Single />} />
          <Route path='new' element={<New inputs={productInputs} title="Add New products" />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;