import React from 'react';
import { Link } from 'react-router-dom';
import './ChapterCard.css';

const Card = ({ cartData }) => {
    return (
        <Link to={cartData.link} className="card-link">
            <div className="card">
                <img
                    src={cartData.image}
                    alt={cartData.title}
                    className="card-image"
                />
                <div className="card-content">
                    <h2 className="card-title">{cartData.title}</h2>
                    <p className="card-description">{cartData.description}</p>
                </div>
            </div>
        </Link>
    );
};

export default Card;
