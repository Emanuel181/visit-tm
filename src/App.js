import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage.tsx';
import ActionAreaCard from './pages/locatii.tsx'; // Import the ActionAreaCard component
import Login from './pages/signin.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/explore-places" element={<ActionAreaCard />} /> {/* Define route for ActionAreaCard */}
        <Route path="/sign-in" element={<Login />} /> {/* Define route for ActionAreaCard */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
