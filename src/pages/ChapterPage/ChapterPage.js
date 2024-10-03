import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import "bootstrap/dist/css/bootstrap.css";
import chaptersData from "../../data/chaptersData.json"; // Import the card data from JSON
import "./ChapterPage.css"; // Import the CSS file
import Tabs from "../../components/ChapterComp/tabs";
import Toolbar from "../../components/ChapterComp/Toolbar";
import MarkdownViewer from "../../components/markDown/MakDown";
import Chatbot from "../../components/chatbot/chatbot"; 
import Selection from "../../components/selection/selection"; // Corrected import
import users from "../../data/users.json"; // Import the user data




const ChapterPage = () => {
  const { id } = useParams();
  const card = chaptersData.find((c) => c.id === Number(id));

  // localStorage.setItem('myData', JSON.stringify({ name: 'Youssef', age: 30 }));
  // const loggedinuser =localStorage.getItem('myData');
  // const userData = users.find((user) => user.id === Number(id));
  // userData["browse-history"].push(
  //   {
  //     "id": card.id,
  //     "title": card.title,
  //     "description": card.description,
  //   }
  // )

  const [activeTab, setActiveTab] = useState("Core Data");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const insertMarkdown = (text) => {
    // Function to handle markdown insertion if needed
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Core Data":
        return (
          <div className="tabs-content text-element">
            <MarkdownViewer />
            <Selection /> {/* Corrected component usage */}
          </div>
        );
      case "Chronicles":
        return (
          <div className="tabs-content">
            Content for Chronicles
            {/* Adding selection component here */}
            <Selection /> {/* Corrected component usage */}
          </div>
        );
      case "Briefed":
        return (
          <div className="tabs-content">
            Content for Briefed
            {/* Adding selection component here as well if needed */}
            <Selection /> {/* Corrected component usage */}
          </div>
        );
      case "For You":
        return (
          <div className="tabs-content">
            Content for For You
            {/* Optionally add selection component */}
            <Selection /> {/* Corrected component usage */}
          </div>
        );
      case "Quizzes":
        return (
          <div className="tabs-content">
            Content for Quizzes
            {/* Optionally add selection component */}
            <Selection /> {/* Corrected component usage */}
          </div>
        );
      default:
        return (
          <div className="tabs-content">
            Select a tab to see the content
          </div>
        );
    }
  };

  return (
    <section className="chapter-page">
      <Helmet>
        {/* Add any head/meta elements you need */}
      </Helmet>
      <div className="container vh-100 split1">
        {/* Tabs component to switch between content */}
        <Tabs handleTabClick={handleTabClick} />
        
        {/* Dynamic tab content */}
        <div className="tab-content">{renderContent()}</div>
      </div>
      
      {/* Chatbot component */}
      <Chatbot />
    </section>
  );
};

export default ChapterPage;