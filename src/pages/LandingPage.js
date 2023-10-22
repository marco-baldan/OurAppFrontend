import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import appImage from './images/logo1.jpg';  // Replace with your image path

const LandingPage = () => {
  return (
    <div className="landing-page">
      <img src={appImage} alt="App Image" className="app-image" /> {/* Add image */}
      <h1>Welcome to Our App!</h1>
      <div className="buttons-container">
        <Link to="/holiday-reviews" className="landing-button">
          Holiday Reviews
        </Link>
        <Link to="/holiday-ideas" className="landing-button">
          Holiday Ideas
        </Link>
        <Link to="/films-to-watch" className="landing-button">
          Films to Watch
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
