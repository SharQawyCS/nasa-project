// Toolbar.js
import React from "react";
import { MdFormatListBulleted } from "react-icons/md";
import { FaRocket } from "react-icons/fa";
import "./toolbar.css";

const Toolbar = ({ insertMarkdown }) => {
  return (
    <div className="toolbar mt-3">
      <button className="btn btn-dark " onClick={() => insertMarkdown("# Heading 1")}>
        H1
      </button>
      <button className="btn btn-dark" onClick={() => insertMarkdown("## Heading 2")}>
        H2
      </button>
      <button className="btn btn-dark" onClick={() => insertMarkdown("### Heading 3")}>
        H3
      </button>
      <button className="btn btn-dark" onClick={() => insertMarkdown("- Bullet Point")}>
        <MdFormatListBulleted />
      </button>
      <button className="btn btn-dark" onClick={() => insertMarkdown("Paragraph text.")}>
        P
      </button>
      <button className="btn btn-dark" onClick={() => insertMarkdown("Rocket Launch!")}>
        <FaRocket />
      </button>
    </div>
  );
};

export default Toolbar;