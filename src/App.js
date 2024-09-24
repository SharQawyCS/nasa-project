import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ChapterPage from './pages/ChapterPage/ChapterPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/card/:id" element={<ChapterPage />} />
            </Routes>
        </Router>
    );
}

export default App;
