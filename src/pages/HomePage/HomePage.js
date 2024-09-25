import React from 'react';
import './HomePage.css';
import ChaptersSection from '../../components/ChaptersSection/ChaptersSection';
import GamesSection from '../../components/GamesSection/GamesSection';
import QuizesSection from '../../components/QuizesSection/QuizesSection';
import LabsSection from '../../components/LabsSection/LabsSection';

const HomePage = () => {
    return (
        <div className="landing-page">
            <ChaptersSection />
            <GamesSection />
            <QuizesSection />
            <LabsSection />
        </div>
    );
};

export default HomePage;
