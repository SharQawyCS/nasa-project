import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import data from '../../data/chaptersData.json';

const MarkdownViewer = () => {
  const { id } = useParams(); // Get chapter ID from route params
  const [markdownContent, setMarkdownContent] = useState('');
  const [error, setError] = useState(''); // State to hold error messages

  useEffect(() => {
    const chapter = data.find((c) => c.id === Number(id));

    if (chapter) {
      const mark = chapter.mark; // Access the mark property
      if (mark) {
        // Fetch the Markdown file from the public directory
        fetch(`${process.env.PUBLIC_URL}/markdown/${mark}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error(`Failed to load markdown file: ${response.status} ${response.statusText}`);
            }
            return response.text();
          })
          .then((text) => {
            setMarkdownContent(text); // Set the markdown content
          })
          .catch((error) => {
            console.error('Error fetching markdown:', error);
            setError('Error loading markdown file.');
          });
      } else {
        console.error('Markdown file not found in the chapter data:', chapter);
        setError('Markdown file not found.');
      }
    } else {
      console.error('Chapter not found for ID:', id);
      setError('Chapter not found.');
    }
  }, [id]);

  return (
    <div className="markdown-container">
      {error && <div className="error">{error}</div>} {/* Display error message if any */}
      <ReactMarkdown>{markdownContent}</ReactMarkdown> {/* Render markdown content */}
    </div>
  );
};

export default MarkdownViewer;