import React from 'react';
import Title from '../Title/Title';
import GamesData from '../../data/gamesData.json';
import GameCard from '../GameCard/GameCard';

const GamesSection = () => {
    return (
        <>
            <Title>Games</Title>
            <div className="card-container">
                {GamesData.map((card, index) => (
                    <GameCard cartData={card} key={index} />
                ))}
            </div>
        </>
    );
};

export default GamesSection;
