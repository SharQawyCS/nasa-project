// Youssef page?
import React from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import chaptersData from '../../data/chaptersData.json'; // Import the card data from JSON
import './ChapterPage.css'; // Import the CSS file
import Tabs from '../../components/ChapterComp/tabs';
import Toolbar from '../../components/ChapterComp/Toolbar';
import MarkdownViewer from '../../components/markDown/MakDown';

const ChapterPage = () => {
    const { id } = useParams();
    const card = chaptersData.find((c) => c.id === Number(id));

    const handleTabClick = (event) => {
        // Get all tab elements
        const tabs = document.querySelectorAll('.nav-link');

        tabs.forEach((tab) => {
            tab.classList.remove('active');
        });

        event.target.classList.add('active');
    };

    const insertMarkdown = (text) => {
        // Logic to insert markdown content
    };

    return (
        <section className="chapter-page">
            <div className="container-fluid px-0">
                {/* Bootstrap row containing two columns (splits) */}
                <div className="row g-0">
                    {/* First column */}
                    <div className="col-lg-6 vh-100 split1">
                        <Tabs handleTabClick={handleTabClick} />
                    </div>

                    {/* Separator between splits */}
                    <div className="col-lg-6 vh-100 split2">
                        <Toolbar insertMarkdown={insertMarkdown} />
                        <MarkdownViewer />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChapterPage;
