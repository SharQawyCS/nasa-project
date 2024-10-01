import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';

const MarkdownViewer = () => {
  const { id } = useParams(); // Get chapter ID from route params
  const [markdownContent, setMarkdownContent] = useState('');
  const [error, setError] = useState(''); // State to hold error messages

  useEffect(() => {
    fetch('/src/data/chaptersData.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error fetching JSON: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        const chapter = data.find((c) => c.id === Number(id));
        if (chapter && chapter.mark) {
          fetch(`/data/${chapter.mark}`)
            .then((response) => {
              if (!response.ok) {
                throw new Error(`Failed to load markdown file: ${response.status} ${response.statusText}`);
              }
              return response.text();
            })
            .then((text) => {
              setMarkdownContent(text); 
            })
            .catch((error) => {
              console.error('Error fetching markdown:', error);
              setError('Error fetching markdown file.');
            });
        } else {
          console.error('Markdown file not found in the JSON data');
          setError('Markdown file not found.');
        }
      })
      .catch((error) => {
        console.error('Error fetching JSON:', error);
        setError(error.message); // More specific error message
      });
  }, [id]);

  return (
    <div className="markdown-container">
      {error && <div className="error">{error}</div>} {/* Display error message if any */}
      <ReactMarkdown>{markdownContent}</ReactMarkdown> {/* Render markdown content */}
    </div>
  );
};

export default MarkdownViewer;