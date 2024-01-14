import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Scenario from './Scenario';
import MainPage from './pages/MainPage';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/scenario" element={<Scenario />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <>
      <header></header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
