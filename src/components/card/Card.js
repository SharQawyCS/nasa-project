// src/components/Card.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ image, title, description, link }) => {
    return (
        <Link to={link} className="card-link">
            <div className="card">
                <img src={image} alt={title} className="card-image" />
                <div className="card-content">
                    <h2 className="card-title">{title}</h2>
                    <p className="card-description">{description}</p>
                </div>
            </div>
        </Link>
    );
};

export default Card;
