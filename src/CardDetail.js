// src/CardDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import cardData from './cardData.json'; // Import the card data from JSON

const CardDetail = () => {
    const { id } = useParams();
    const card = cardData.find((c) => c.id === id);

    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            {card ? (
                <>
                    <h1>{card.title}</h1>
                    <img
                        src={card.image}
                        alt={card.title}
                        style={{ width: '300px' }}
                    />
                    <p>{card.description}</p>
                </>
            ) : (
                <h1>Card not found</h1>
            )}
        </div>
    );
};

export default CardDetail;
