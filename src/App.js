import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ChapterPage from './pages/ChapterPage/ChapterPage';
import './GlobalStyles.css'; // Import the global CSS
import Header from './components/Header/Header';
import AboutPage from './pages/AboutPage/AboutPage';

const App = () => {
    return (
        <Router>
            <Header />
            <div className="app-container space-background">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/card/:id" element={<ChapterPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="*" element={<h1>Not Found</h1>} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
