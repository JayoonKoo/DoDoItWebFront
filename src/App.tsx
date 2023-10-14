import React from 'react';
import SignupPage from './pages/SignupPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignupPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
