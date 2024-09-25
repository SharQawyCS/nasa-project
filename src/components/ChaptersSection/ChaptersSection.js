import React from 'react';
import chaptersData from '../../data/chaptersData.json';
import ChapterCard from '../ChapterCard/ChapterCard';
import Title from '../Title/Title';

const ChaptersList = () => {
    return (
        <>
            <Title>Chapters</Title>
            <div className="card-container">
                {chaptersData.map((card, index) => (
                    <ChapterCard cartData={card} key={index} />
                ))}
            </div>
        </>
    );
};

export default ChaptersList;
