import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './HolidayIdeas.css';

import logo1 from './images/logo1.jpg' 
import logo2 from './images/logo2.jpg'

const HolidayIdeas = () => {
  const [ideas] = useState([
    {
      id: 1,
      name: 'Loren Ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      stars: 4,
      cost: '$1000',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Escape to a beautiful beach and unwind by the waves.',
      tips: 'Tip 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      images: [logo1,logo2],
    },
    {
      id: 2,
      name: 'Loren Ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      stars: 5,
      cost: '$1200',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Embark on a mountain adventure and enjoy stunning views.',
      tips: 'Tip 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      images: [logo1,logo2],
    },
    {
      id: 1,
      name: 'Loren Ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      stars: 4,
      cost: '$1000',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Escape to a beautiful beach and unwind by the waves.',
      tips: 'Tip 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      images: [logo1,logo2],
    },
  ]);
  const [data, setData] = useState(null);
  useEffect(() => {
    // Use axios to make a GET request to the local server.
    axios.get('http://localhost:3001/holiday-ideas-data')
      .then((response) => setData(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  const [selectedIdea, setSelectedIdea] = useState(null);
  const [showPictures, setShowPictures] = useState(false);
  const [showDetails, setShowDetails] = useState({});

  const handleTogglePictures = (idea) => {
    setShowPictures(!showPictures);
    setSelectedIdea(showPictures ? null : idea);
  };

  const handleToggleDetails = (idea) => {
    setShowDetails({ ...showDetails, [idea.id]: !showDetails[idea.id] });
  };

  const displayStarRating = (stars) => {
    const starIcons = [];
    for (let i = 0; i < stars; i++) {
      starIcons.push(<span key={i}>&#9733;</span>); // Unicode for a star
    }
    return starIcons;
  };


  return (
    <div className="holiday-ideas">
      <h2>Holiday Ideas</h2>
      <div className="idea-container">
        {ideas.map((idea) => (
          <div className="idea-box" key={idea.id}>
            <h3>{idea.name}</h3>
            <p>{idea.description}</p>
            <div className="idea-details">
              <span>Stars: {displayStarRating(idea.stars)}</span>
              <span>Average Cost: {idea.cost}</span>
            </div>
            <button onClick={() => handleTogglePictures(idea)} className="about-button">
              {showPictures && selectedIdea === idea ? 'Close Pictures' : 'Pictures'}
            </button>
            <button onClick={() => handleToggleDetails(idea)} className="more-button">
              {showDetails[idea.id] ? '-' : '+'}
            </button>
            {showDetails[idea.id] && (
              <div className="idea-more-details">
                <h3>Details</h3>
                <p>{idea.details}</p>
                <h3>Tips</h3>
                <p>{idea.tips}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {showPictures && selectedIdea && (
  <div className="picture-modal">
    <span className="close" onClick={() => setShowPictures(false)}>
      &times;
    </span>
    <div className="picture-content">
      {selectedIdea.images.map((image, index) => (
        <img key={index} src={image}  />
      ))}
    </div>
  </div>
)}
    </div>
  );
};

export default HolidayIdeas;
