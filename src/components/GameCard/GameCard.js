import React from 'react';
import { Link } from 'react-router-dom';
import './GameCard.css';

const Card = ({ cartData }) => {
    return (
        <Link to={cartData.link} className="game-card-link">
            <div className="game-card">
                <img
                    src={cartData.image}
                    alt={cartData.title}
                    className="game-card-image"
                />
                <div className="game-card-content">
                    <h2 className="game-card-title">{cartData.title}</h2>
                    <p className="game-card-description">
                        {cartData.description}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default Card;
