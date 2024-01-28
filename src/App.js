import React, { useState } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import SelectGoal from './pages/landing/SelectGoal';
import MainPage from './pages/MainPage';
import BasicQuestion1 from './pages/landing/BasicQuestion1';
import Scenario1 from './pages/scenario/Scenario1';
import Scenario2 from './pages/scenario/Scenario2';
import Result from './pages/scenario/Result';
import ProgressBar from './components/HeaderProgressBar'; // 추가
import './App.css';

function App() {
  const [data, setData] = useState({
    username: '',
    mostImportant: '',
    basicQaObject: [],
    situation: '',
    pastScenarios: [],
  });

  const updateData = (newData) => {
    setData((prevData) => ({ ...prevData, ...newData }));
  };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage data={data} updateData={updateData} />} />
        <Route path="/select_goal" element={<SelectGoal data={data} updateData={updateData} />} />
        <Route path="/basic_question_1" element={<BasicQuestion1 data={data} updateData={updateData} />} />
        <Route path="/scenario_1" element={<Scenario1 data={data} updateData={updateData} />} />
        <Route path="/scenario_2" element={<Scenario2 data={data} updateData={updateData} />} />
        <Route path="/result" element={<Result data={data} updateData={updateData} />} />
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
