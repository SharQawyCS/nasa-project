// src/LandingPage.js
import React from 'react';
import Card from './components/card/Card';
import './LandingPage.css';
import cardData from './cardData.json'; // Importing the card data from JSON

const LandingPage = () => {
    return (
        <div className="landing-page">
            <h1 className="heading">Landing Page with Cards</h1>
            <div className="card-container">
                {cardData.map((card, index) => (
                    <Card
                        key={index}
                        image={card.image}
                        title={card.title}
                        description={card.description}
                        link={card.link}
                    />
                ))}
            </div>
        </div>
    );
};

export default LandingPage;
