import React, { useState } from 'react';
import './homeStyles.css';
import { Link } from 'react-router-dom';

const Home = ({ user, submitLeague }) => {
  const [createLeague, setCreateLeague] = useState(false);
  const [leagueName, setLeagueName] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    submitLeague(leagueName, user.id);
    setLeagueName('');
    setCreateLeague(false);
  };

  return (
    <div>
      <button onClick={() => setCreateLeague(!createLeague)}>
        Create Sunday League
      </button>
      {createLeague ? (
        <div>
          <form onSubmit={submitForm}>
            <input
              className="home-input"
              type="text"
              placeholder="Your league name here..."
              value={leagueName}
              onChange={(e) => setLeagueName(e.target.value)}
            />
            <button>Create</button>
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default Home;
