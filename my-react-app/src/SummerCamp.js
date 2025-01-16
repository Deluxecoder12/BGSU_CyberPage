import React from 'react';
import { Link } from 'react-router-dom';

function SummerCamp() {
  return (
    <div>
      <div className="back-navigation">
        <Link to="/" className="back-link">← Back to Home</Link>
      </div>
      <h2>Summer Camp</h2>
      <p>This is the Summer Camp page. Details about the summer camp go here.</p>
    </div>
  );
}

export default SummerCamp;