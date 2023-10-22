import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import FilmsToWatch from './pages/FilmsToWatch';
import HolidayIdeas from './pages/HolidayIdeas';
import HolidayReviews from './pages/HolidayReviews'

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/holiday-ideas" element={<HolidayIdeas />} />
          <Route path="/films-to-watch" element={<FilmsToWatch />} />
          <Route path="/holiday-reviews" element={<HolidayReviews />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
    </Router>
  );
};

export default App;
