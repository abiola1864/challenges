import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


// App.js

import React, { useState } from 'react';
import Form from './Form';

function App() {
  const [activities, setActivities] = useState([]);

  const handleAddActivity = (newActivity) => {
    setActivities((prevActivities) => [
      ...prevActivities,
      { id: generateUniqueId(), ...newActivity },
    ]);
  };

  const generateUniqueId = () => {
    // Logic to generate a unique ID (e.g., using a library or custom logic)
    // Return a unique ID here
  };

  return (
    <div className="App">
      <Form onAddActivity={handleAddActivity} />
      {/* Render activities or other components */}
    </div>
  );
}

export default App;

