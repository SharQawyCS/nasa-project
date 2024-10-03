import React from "react";
import './tabs.css'
const Tabs = ({ handleTabClick, activeTab }) => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      {/* Previous button aligned to the left */}
      <button className="nav-link previous" onClick={handleTabClick}>
        &laquo; Prev
      </button>

      {/* Centered tabs */}
      <ul className="nav nav-tabs justify-content-center">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "Core Data" ? "active" : ""}`}
            onClick={() => handleTabClick("Core Data")}
          >
            Core Data
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "Chronicles" ? "active" : ""}`}
            onClick={() => handleTabClick("Chronicles")}
          >
            Chronicles
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "Briefed" ? "active" : ""}`}
            onClick={() => handleTabClick("Briefed")}
          >
            Briefed
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "For You" ? "active" : ""}`}
            onClick={() => handleTabClick("For You")}
          >
            For You
          </button>
        </li>
      </ul>

      {/* Next button aligned to the right */}
      <button className="nav-link next" onClick={handleTabClick}>
        Next &raquo;
      </button>
    </div>
  );
};

export default Tabs;