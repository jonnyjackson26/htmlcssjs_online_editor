import React from 'react';
import './Editor.css';

const Editor = ({ language, value, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="editor-container">
      <h2>{language}</h2>
      <textarea
        value={value}
        onChange={handleChange}
        className="editor-textarea"
      />
    </div>
  );
};

export default Editor;
