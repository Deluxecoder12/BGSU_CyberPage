import React from 'react';
import { Link } from 'react-router-dom';

function Workshops() {
  return (
    <div>
      <div className="back-navigation">
        <Link to="/" className="back-link">← Back to Home</Link>
      </div>
      <h2>Workshops</h2>
      <p>This is the Workshops page. Details about the workshops go here.</p>
    </div>
  );
}

export default Workshops;
