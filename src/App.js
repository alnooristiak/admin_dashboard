import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './pages/home/Home';
import List from './pages/list/List';
import Login from './pages/login/Login';
import New from './pages/new/New';
import Single from './pages/single/Single';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="login" element={ <Login /> } />
        <Route path="users">
          <Route index element={<List />} />
          <Route path=':userId' element={<Single />} />
          <Route path='new' element={<New />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;