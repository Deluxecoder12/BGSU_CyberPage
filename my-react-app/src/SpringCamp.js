import React from 'react';
import { Link } from 'react-router-dom';

function SpringCamp() {
  return (
    <div>
        <div className="back-navigation">
        <Link to="/" className="back-link">← Back to Home</Link>
      </div>
      <h2>Spring Camp</h2>
      <p>This is the Spring Camp page. Details about the spring camp go here.</p>
    </div>
  );
}

export default SpringCamp;
