// Tabs.js
import React from "react";

const Tabs = ({ handleTabClick }) => {
  return (
    <ul className="nav nav-tabs justify-content-center">
      <li className="nav-item">
        <button className="nav-link previous" onClick={handleTabClick}>
          &laquo; Prev
        </button>
      </li>
      <li className="nav-item">
        <button className="nav-link active" onClick={handleTabClick}>
          Core Data
        </button>
      </li>
      <li className="nav-item">
        <button className="nav-link" onClick={handleTabClick}>
          Chronicles
        </button>
      </li>
      <li className="nav-item">
        <button className="nav-link" onClick={handleTabClick}>
          Briefed
        </button>
      </li>
      <li className="nav-item">
        <button className="nav-link" onClick={handleTabClick}>
          For You
        </button>
      </li>
      <li className="nav-item">
        <button className="nav-link next" onClick={handleTabClick}>
         next &gt;
        </button>
      </li>
    </ul>
  );
};

export default Tabs;