import  { useState, useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import feedbackData from '../assets/feedbackData.json';
import feedimage from '../assets/feedimage.json';


import '../styles/Slider.css';

export const EmblaCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isSmallScreen = window.innerWidth <= 768; // Adjust the screen size breakpoint as needed

  useEffect(() => {
    if (currentSlide >= feedbackData.length - 1) {
      setCurrentSlide(0);
    }
  }, [currentSlide]);

  const renderStars = (rating) => {
    return (
      Array.from({ length: rating }, (_, i) => (
        <span key={i} className="star shine">★</span>
      ))
    );
  };

  const renderCarouselItems = () => {
    if (isSmallScreen) {
      // On a small screen, only show one item in the carousel
     
      return feedbackData.map((feedback, i) => (
        <div className="feedback-item" key={i}>
          <div className="avatar">{feedbackData[currentSlide].name[0]}</div>
          <div className="content">
            <h4>{feedbackData[currentSlide].name}</h4>
            <p>{feedbackData[currentSlide].feedback}</p>
            <div className="rating">{renderStars(feedbackData[currentSlide].rating)}</div>
        
          </div>
        </div>
      ));

    } else {
      // On a large screen, show multiple items in the carousel
      return feedbackData.map((feedback, i) => (
        <div className="feedback-item" key={i}>
          <div className="avatar">{feedback.name[0]}</div>
          <div className="content">
            <h4>{feedback.name}</h4>
            <p>{feedback.feedback}</p>
            <div className="rating">{renderStars(feedback.rating)}</div>
    
          </div>
        </div>
      ));
    }
  };

  const renderImages = () => {
    return feedimage.map((feedback, i) => (
      <div key={i}>
        <img loading="lazy" src={feedback.image} alt={`feedimage ${i}`} />
      </div>
    ));
  };

  return (
    <div className="embla" >
      <div  className="feed-prev">
        <p data-aos="fade-up" data-aos-duration="1000">
          Read through our satisfied customer feedbacks and reviews<br />
             ...
        </p>
      </div>
      <div className="feedback-container">
        <Carousel
          showArrows={!isSmallScreen || isSmallScreen } // Show arrows only on large screens
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          selectedItem={currentSlide}
          interval={7000} // Auto-slide interval in milliseconds (e.g., 5 seconds)
          stopOnHover={true} 
          autoPlay={true} // Enable auto-sliding
          infiniteLoop={true} // Loop through images continuously
          
        >
          {renderCarouselItems()}
        </Carousel>
      </div>
      <div  className="feed-imgs">
      <Carousel
          autoPlay={true} // Enable auto-sliding
          infiniteLoop={true} // Loop through images continuously
          stopOnHover={true} // Do not stop auto-slide on hover
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          selectedItem={currentSlide}
          interval={5000} // Auto-slide interval in milliseconds (e.g., 5 seconds)
        >
          {renderImages()}
        </Carousel>
      </div>
    </div>
  );
};
