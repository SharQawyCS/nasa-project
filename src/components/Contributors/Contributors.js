import React from 'react';
import './Contributors.css'; // Make sure to create a CSS file for styling

const contributorsList = [
    {
        name: 'sharqawycs',
        role: 'A Good Man',
        image: '../../imgs/devsImgs/sharqawycs.jpg',
    },
    {
        name: 'Bob Johnson',
        role: 'Web Developer',
        image: 'https://images-assets.nasa.gov/image/PIA19344/PIA19344~orig.jpg',
    },
    // Add more contributors as needed
];

const Contributors = () => {
    return (
        <div className="contributors-container">
            <h2>Meet Our Contributors</h2>
            <div className="contributors-grid">
                {contributorsList.map((contributor, index) => (
                    <div className="contributor-card" key={index}>
                        <img
                            src={contributor.image}
                            alt={contributor.name}
                            className="contributor-image"
                        />
                        <h3 className="contributor-name">{contributor.name}</h3>
                        <p className="contributor-role">{contributor.role}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Contributors;
