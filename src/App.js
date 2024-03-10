import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage.tsx';
import ActionAreaCard from './pages/locatii.tsx'; // Import the ActionAreaCard component
import Login from './pages/login.tsx';
import Uvt from './pages/Style/carduri/Ubs.tsx';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Uvt />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;