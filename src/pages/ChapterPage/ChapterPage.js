import React from 'react';
import { useParams } from 'react-router-dom';
import chaptersData from '../../data/chaptersData.json'; // Import the card data from JSON
import './ChapterPage.css'; // Import the CSS file

const ChapterPage = () => {
    const { id } = useParams();
    const card = chaptersData.find((c) => c.id === id);

    return (
        <div className="card-detail">
            {card ? (
                <>
                    <h1>{card.title}</h1>
                    <img
                        src={card.image}
                        alt={card.title}
                        className="card-image"
                    />
                    <p>{card.description}</p>
                </>
            ) : (
                <h1 className="card-not-found">Card not found</h1>
            )}
        </div>
    );
};

export default ChapterPage;
