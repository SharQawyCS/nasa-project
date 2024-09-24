import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import CardDetail from './CardDetail';

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
