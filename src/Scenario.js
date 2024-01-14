import React from 'react';
import { Link } from 'react-router-dom';
import './Scenario.css';

function Scenario() {
  return (
    <div className="scenario-container">
      <div className="scenario-content">
        <h1>Hello World</h1>
        <div className="button-container">
          <Link to="/scenario_a" className="button">
            A
          </Link>
          <Link to="/scenario_b" className="button">
            B
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Scenario;
