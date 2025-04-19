import React, { useState } from 'react';
import './Videos.css';

function Videos() {
  const [videoUrl, setVideoUrl] = useState('');

  const handleInputChange = (event) => {
    setVideoUrl(event.target.value);
  };

  return (
    <div className="videos-container">
      <h2>Upload your Videos</h2>
      <input
        type="text"
        placeholder="Paste video URL here"
        value={videoUrl}
        onChange={handleInputChange}
        className="video-input"
      />
      {videoUrl && (
        <iframe
          src={videoUrl}
          title="Video Player"
          className="video-frame"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
}

export default Videos;