import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage.tsx';
import ActionAreaCard from './pages/locatii.tsx'; // Import the ActionAreaCard component
import Login from './pages/login.tsx';
import Uvt from './pages/Piata_unirii.tsx';
import Hero2 from "./components/Piata_unirii/Hero2.tsx";
import SignUp from "./pages/signup.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/explore-places" element={<ActionAreaCard />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/piata-unirii" element={<Hero2 />} /> 
        {/* <Route path="/catedrala" element={<Login />} /> 
        <Route path="/uvt" element={<Login />} /> 
        <Route path="/rozelor" element={<Login />} /> 
        <Route path="/politehnica" element={<Login />} />  */}
        <Route path="/signin" element={<SignUp />} /> 
        {/* <Route path="/piata-unirii" element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;