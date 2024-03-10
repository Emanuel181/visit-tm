import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage.tsx';
import ActionAreaCard from './pages/locatii.tsx'; // Import the ActionAreaCard component
import Login from './pages/login.tsx';
<<<<<<< HEAD
import Uvt from './pages/Style/carduri/Ubs.tsx';
=======
import Uvt from './pages/Piata_unirii.tsx';
import Hero2 from "./components/Piata_unirii/Hero2.tsx";
import SignUp from "./pages/signup.tsx";

>>>>>>> 28390698f321b3b52bc038ef2d3eaa7763938a1b
function App() {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Uvt />} />
=======
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
>>>>>>> 28390698f321b3b52bc038ef2d3eaa7763938a1b
      </Routes>
    </BrowserRouter>
  );
}

export default App;