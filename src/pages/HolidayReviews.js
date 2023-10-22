import React, { useState } from 'react';
import './HolidayReviews.css';

import logo1 from './images/logo1.jpg' 
import logo2 from './images/logo2.jpg'

const HolidayReviews = () => {
  const [reviews] = useState([
    {
      id: 1,
      name: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet.',
      stars: 4,
      cost: '$1000',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tips: 'Tip 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      images: [logo1,logo2],
    },
    {
      id: 2,
      name: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet.',
      stars: 5,
      cost: '$1200',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tips: 'Tip 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      images: [logo1,logo2],
    },
  ]);

  const [selectedReview, setSelectedReview] = useState(null);
  const [showPictures, setShowPictures] = useState(false);
  const [showDetails, setShowDetails] = useState({});

  const handleTogglePictures = (review) => {
    setShowPictures(!showPictures);
    setSelectedReview(showPictures ? null : review);
  };

  const handleToggleDetails = (review) => {
    setShowDetails({ ...showDetails, [review.id]: !showDetails[review.id] });
  };

  const displayStarRating = (stars) => {
    const starIcons = [];
    for (let i = 0; i < stars; i++) {
      starIcons.push(<span key={i}>&#9733;</span>); // Unicode for a star
    }
    return starIcons;
  };

  return (
    <div className="holiday-reviews">
      <h2>Holiday Reviews</h2>
      <div className="review-container">
        {reviews.map((review) => (
          <div className="review-box" key={review.id}>
            <h3>{review.name}</h3>
            <p>{review.description}</p>
            <div className="review-details">
              <span>Stars: {displayStarRating(review.stars)}</span>
              <span>Average Cost: {review.cost}</span>
            </div>
            <button onClick={() => handleTogglePictures(review)} className="about-button">
              {showPictures && selectedReview === review ? 'Close Pictures' : 'Pictures'}
            </button>
            <button onClick={() => handleToggleDetails(review)} className="more-button">
              {showDetails[review.id] ? '-' : '+'}
            </button>
            {showDetails[review.id] && (
              <div className="review-more-details">
                <h3>Details</h3>
                <p>{review.details}</p>
                <h3>Tips</h3>
                <p>{review.tips}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {showPictures && selectedReview && (
        <div className="picture-modal">
          <span className="close" onClick={() => setShowPictures(false)}>
            &times;
          </span>
          <div className="picture-content">
            {selectedReview.images.map((image, index) => (
              <img key={index} src={image} alt={`Image ${index + 1}`} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HolidayReviews;