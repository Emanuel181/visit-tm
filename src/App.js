import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage.tsx';
import ActionAreaCard from './pages/locatii.tsx'; 
import ActionAreaCard2 from './pages/locatii2.tsx'; 
import Login from './pages/login.tsx';
import SignUp from "./pages/signup.tsx";
import PiataUnirii from "./pages/Style/carduri/Piata_unirii.tsx";
import Upt from "./pages/Style/carduri/Upt.tsx";
import UVT from "./pages/Style/carduri/Uvt.tsx";
import BCR from "./pages/Style/carduri/BCR.tsx";
import Iulius from "./pages/Style/carduri/Iulius.tsx";
import UBC from './pages/Style/carduri/Ubc.tsx';
import Convention from './pages/Style/carduri/Convention.tsx'
import Robot from './components/robot.tsx';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/explore-places1" element={<ActionAreaCard2 />} /> 
        <Route path="/explore-places" element={<ActionAreaCard />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/piata-unirii" element={<PiataUnirii />} /> 
        <Route path="/upt" element={<Upt />} /> 
        <Route path="/BCR" element={<BCR />} /> 
        <Route path="/UVT" element={<UVT />} /> 
        <Route path="/Iulius" element={<Iulius />} /> 
        <Route path="/signin" element={<SignUp />} />
        <Route path="/UBC" element={<UBC />} /> 
        <Route path="/Convention" element={<Convention />} />
        <Route path="/Robot" element={<Robot />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;