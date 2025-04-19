import React from 'react';
import './Dashboard.css';
// import sampleVideo from '../sample-video.mp4';
import HamburgerMenu from './HamburgerMenu';

function Dashboard() {
    return (
      <div className="dashboard-container">
        <HamburgerMenu /> {}
        <div className="video-section">
          <video className="sample-video" controls>
            <source src='https://brandspace.deloitte.com/downloads/673e659786523/WE0627_preview.mp4' type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="text-section">
          <h2>Are you ready to kickstart your <span className="highlight">Digital Gallery</span> journey?</h2>
          <p>Upload your videos and explore a variety of content. Dive into the world of video sharing and discover new and exciting videos from our community.</p>
        </div>
      </div>
    );
}

export default Dashboard;