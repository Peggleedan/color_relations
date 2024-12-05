import './css/Quiz1.css';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Quiz1() {

  const quizCards = [
    [
        {
            id: 1,
            frontImage: "/Images/poverty.png",
            title: "No Poverty",
            description: "End poverty in all its forms everywhere.",
        },
        {
            id: 2,
            frontImage: "/Images/hunger.png",
            title: "Zero Hunger",
            description: "End hunger, achieve food security and improved nutrition and promote sustainable agriculture.",
        },
        {
            id: 3,
            frontImage: "/Images/health.png",
            title: "Good Health",
            description: "Ensure healthy lives and promote well-being for all at all ages.",
        },
        {
            id: 4,
            frontImage: "/Images/education.png",
            title: "Quality Education",
            description: "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.",
        },
    ],
    [
        {
            id: 5,
            frontImage: "/Images/poverty.png",
            title: "No Poverty",
            description: "End poverty in all its forms everywhere.",
        },
        {
            id: 6,
            frontImage: "/Images/hunger.png",
            title: "Zero Hunger",
            description: "End hunger, achieve food security and improved nutrition and promote sustainable agriculture.",
        },
        {
            id: 7,
            frontImage: "/Images/health.png",
            title: "Good Health",
            description: "Ensure healthy lives and promote well-being for all at all ages.",
        },
        {
            id: 8,
            frontImage: "/Images/education.png",
            title: "Quality Education",
            description: "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.",
        },
    ],
    [
        {
            id: 9,
            frontImage: "/Images/poverty.png",
            title: "No Poverty",
            description: "End poverty in all its forms everywhere.",
        },
        {
            id: 10,
            frontImage: "/Images/hunger.png",
            title: "Zero Hunger",
            description: "End hunger, achieve food security and improved nutrition and promote sustainable agriculture.",
        },
        {
            id: 11,
            frontImage: "/Images/health.png",
            title: "Good Health",
            description: "Ensure healthy lives and promote well-being for all at all ages.",
        },
        {
            id: 12,
            frontImage: "/Images/education.png",
            title: "Quality Education",
            description: "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.",
        },
    ],
];

  const [current, setCurrent] = useState(0);

  const next = () => {
    if (current < quizCards.length - 1) {
        setCurrent((prev) => prev + 1);
    } 
    else {
        alert("All rounds completed! Click ok to load google form.");
        window.location.href='https://www.google.com';
    }
  };
  return (
    <>
      <div className="main-container">
        <div className="quiz-card-container">
          {quizCards[current].map((card) => (
            <div className="quiz-card" key={card.id}>
              <div className="quiz-card-front" id={`card-${card.id}-f`}>
                <img src={card.frontImage} alt={card.title} />
              </div>
              <div className="quiz-card-back" id={`card-${card.id}-b`}>
                <h2>{card.title}</h2>
                <p>{card.description}</p>
                <hr />
              </div>
            </div>
          ))}
        </div>
        
      </div>
      <button className="next-button" onClick={next}>Next Round</button>
      </>
  );
}

export default Quiz1;
