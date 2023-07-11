import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sigin from './component/Sigin';
import Profile from './component/Profile';

function App() {
  const token = localStorage.getItem('jtoken');

  if (!token) {
    return <Sigin />;
  }

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/Profile" element={<Profile />} />
          <Route path="/" element={<Sigin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
