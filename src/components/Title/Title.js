import React from 'react';
import './Title.css'; // Import the CSS for styling

const Title = ({ children }) => {
    return <div className="custom-title">{children}</div>;
};

export default Title;
