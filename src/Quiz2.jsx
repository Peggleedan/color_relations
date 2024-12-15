import './css/Quiz2.css';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function shuffle(array) {
    let currentIndex = array.length;

    while (currentIndex != 0) {
  
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
  }

function Quiz2() {

    const origQuizCards = [
        [
            {
                id: 1,
                frontImage: "/Images/health.png",
                title: "Good Health and Well-being",
                description: "Ensure healthy lives and promote well-being for all at all ages.",
            },
            {
                id: 2,
                frontImage: "/Images/climate.png",
                title: "Climate Action",
                description: "Take urgent action to combat climate change and its impacts.",
            },
        ],
        [
            {
                id: 3,
                frontImage: "/Images/climate.png",
                title: "Climate Action",
                description: "Take urgent action to combat climate change and its impacts.",
            },
            {
                id: 4,
                frontImage: "/Images/life.png",
                title: "Life on Land",
                description: "Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss.",
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
                frontImage: "/Images/inequality.png",
                title: "Reduced Inequalities",
                description: "Reduce inequality within and among countries.",
            },
        ],
        [
            {
                id: 7,
                frontImage: "/Images/education.png",
                title: "Quality Education",
                description: "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.",
            },
            {
                id: 8,
                frontImage: "/Images/economy.png",
                title: "Quality Education",
                description: "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.",
            },
        ],
        [
            {
                id: 9,
                frontImage: "/Images/energy.png",
                title: "Affordable and Clean Energy",
                description: "Ensure access to affordable, reliable, sustainable and modern energy for all.",
            },
            {
                id: 10,
                frontImage: "/Images/water.png",
                title: "Life below Water",
                description: "Conserve and sustainably use the oceans, seas and marine resources for sustainable development.",
            },
        ],
        [
            {
                id: 11,
                frontImage: "/Images/hunger.png",
                title: "Zero Hunger",
                description: "End hunger, achieve food security and improved nutrition and promote sustainable agriculture.",
            },
            {
                id: 12,
                frontImage: "/Images/partnership.png",
                title: "Partnerships for the Goals",
                description: "Strengthen the means of implementation and revitalize the Global Partnership for Sustainable Development.",
            },
        ],
];

    const [quizCards, setQuizCards] = useState([]);
    const [current, setCurrent] = useState(0);
    const [timeLeft, setTimeLeft] = useState(8);
    const [isTimerRunning, setIsTimerRunning] = useState(false);

    const ready = () => {
        setIsTimerRunning(true);
    };

    useEffect(() => {
        const shuffled = shuffle([...origQuizCards]);
        setQuizCards(shuffled);
    }, []);

    useEffect(() => {
        let timer;
        if (isTimerRunning && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            clearInterval(timer);
            setIsTimerRunning(false); 
            setCurrent((prev) => prev + 1); 
            setTimeLeft(8);
        }

        return () => clearInterval(timer);
    }, [isTimerRunning, timeLeft]);

    console.log(quizCards);
    if (current >= quizCards.length) {
        return (
            <div className="main-container">
                <h1>All rounds completed!</h1>
                <button className="next-button" onClick={() => (window.location.href = 'https://www.google.com')}>Proceed to Form</button>
            </div>
        );
    }

    return (
        <>
            <div className="main-container">
                {!isTimerRunning ? (
                    <button className="ready-button" onClick={ready}>Start {current+1}/6</button>
                ) : (
                    <>
                        <h2 className='timer'>Time Left: {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? '0' : ''}{timeLeft % 60}</h2>
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
                    </>
                )}
            </div>
        </>
    );
}

export default Quiz2;