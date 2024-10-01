import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import "bootstrap/dist/css/bootstrap.css";
import chaptersData from "../../data/chaptersData.json"; // Import the card data from JSON
import "./ChapterPage.css"; // Import the CSS file
import Tabs from "../../components/ChapterComp/tabs";
import Toolbar from "../../components/ChapterComp/Toolbar";
import MarkdownViewer from "../../components/markDown/MakDown";

const ChapterPage = () => {
  const { id } = useParams();
  const card = chaptersData.find((c) => c.id === Number(id));

  const [activeTab, setActiveTab] = useState("Core Data");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const insertMarkdown = (text) => {
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Core Data":
        return <div className="tabs-content"><MarkdownViewer/></div>;
      case "Chronicles ":
        return <div className="tabs-content">Content for Chronicles</div>;
      case "Briefed":
        return <div className="tabs-content">Content for Briefed</div>;
      case "For You":
        return <div className="tabs-content">Content for For You</div>;
      default:
        return <div className="tabs-content">Select a tab to see the content</div>;
    }
  };

  return (
    <section className="chapter-page">
      {/* Use Helmet to inject the chatbot scripts */}
      <Helmet>
        <script>
          {`
          window.embeddedChatbotConfig = {
            chatbotId: "DDKxc6TlN_031skE8J1pc",
            domain: "www.chatbase.co"
          };
          `}
        </script>
        <script
          src="https://www.chatbase.co/embed.min.js"
          chatbotId="DDKxc6TlN_031skE8J1pc"
          domain="www.chatbase.co"
          defer
          crossorigin="anonymous"
        ></script>
      </Helmet>

      <div className="container-fluid px-0">
        {/* Bootstrap row containing two columns (splits) */}

          {/* First column - Display Tabs and Dynamic Content here */}
          <div className="conatiner vh-100 split1">
            <Tabs handleTabClick={handleTabClick} />
            <div className="tab-content">
              {renderContent()}
            </div>
          </div>

          {/* Second column - Toolbar (static or dynamic based on requirement) */}
          {/* <div className="col-lg-6 vh-100 split2">
            <Toolbar insertMarkdown={insertMarkdown} />
            <MarkdownViewer />
          </div> */}
        </div>
    </section>
  );
};

export default ChapterPage;