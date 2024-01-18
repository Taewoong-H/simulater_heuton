import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import SelectGoal from './pages/landing/SelectGoal';
import MainPage from './pages/MainPage';
import BasicQuestion1 from './pages/landing/BasicQuestion1';
import LoadingPage from './pages/landing/LoadingPage';
import ProgressBar from './components/HeaderProgressBar'; // 추가
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/select_goal" element={<SelectGoal />} />
        <Route path="/basic_question_1" element={<BasicQuestion1 />} />
        <Route path="/loading" element={<LoadingPage />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <>
      <header>
        <ProgressBar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
