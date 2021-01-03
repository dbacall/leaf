import React, { useState } from 'react';
import './homeStyles.css';
import { Link } from 'react-router-dom';

const Home = ({ user, submitLeague }) => {
  const [createLeague, setCreateLeague] = useState(false);
  const [name, setName] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    submitLeague(name, user.id);
    setName('');
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
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button>Create</button>
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default Home;
