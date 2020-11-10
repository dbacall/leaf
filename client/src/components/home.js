import React, { useState, useEffect } from 'react';
import './styles/home.css';

const Home = (props) => {
  const [createLeague, setCreateLeague] = useState(false);
  const [leagueName, setLeagueName] = useState('');

  return (
    <div>
      <h1>Home</h1>
      <h2>Hello {props.name}</h2>
      <button onClick={() => setCreateLeague(!createLeague)}>
        Create Sunday League
      </button>
      {createLeague ? (
        <div>
          <input
            className="home-input"
            type="text"
            placeholder="Your league name here..."
            value={leagueName}
            onChange={(e) => setLeagueName(e.target.value)}
          />
          <button>Create</button>
        </div>
      ) : null}
    </div>
  );
};

export default Home;
