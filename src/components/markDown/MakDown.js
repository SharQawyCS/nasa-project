import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom'; // To get chapter ID if needed

const MarkdownViewer = () => {
  const { id } = useParams(); // Use this if you are dynamically getting the chapter based on route params
  const [markdownContent, setMarkdownContent] = useState('');
  
  // Fetch the JSON file and get the markdown file path
  useEffect(() => {
    fetch('/data/chaptersData.json')
      .then((response) => response.json())
      .then((data) => {
        // Find the chapter based on the ID from params (if necessary)
        const chapter = data.find((c) => c.id === Number(id)); // Or directly use data[0] if not using params

        // Use the `mark` property from the JSON to fetch the markdown file
        if (chapter && chapter.mark) {
          fetch(chapter.mark) // Fetch markdown file based on the filename
            .then((response) => response.text())
            .then((text) => {
              setMarkdownContent(text); // Set markdown content
            })
            .catch((error) => console.error('Error fetching markdown:', error));
        } else {
          console.error('Markdown file not found in the JSON data');
        }
      })
      .catch((error) => console.error('Error fetching JSON:', error));
  }, [id]); // Dependency array includes `id` if routing by chapter

  return (
    <div className="markdown-container">
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </div>
  );
};

export default MarkdownViewer;