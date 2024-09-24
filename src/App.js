import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/HomePage/HomePage';
import CardDetail from './pages/ChapterPage/ChapterPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/card/:id" element={<CardDetail />} />
            </Routes>
        </Router>
    );
}

export default App;
