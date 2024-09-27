import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import myMarkdownFile from './myFile.md'; // Import the markdown file

const MarkdownViewer = () => {
  const [markdownContent, setMarkdownContent] = useState('');

  // Fetch the markdown file content
  useEffect(() => {
    fetch(myMarkdownFile)
      .then((response) => response.text())
      .then((text) => {
        setMarkdownContent(text);
      });
  }, []);

  return (
    <div className="markdown-container">
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </div>
  );
};

export default MarkdownViewer;