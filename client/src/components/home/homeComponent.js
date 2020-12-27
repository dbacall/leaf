import React, { useState } from 'react';
import './homeStyles.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = ({ user }) => {
  const [createLeague, setCreateLeague] = useState(false);
  const [leagueName, setLeagueName] = useState('');

  const submitLeague = () => {
    const data = {
      leagueName: leagueName,
      owner: user.id,
    };

    axios.post('http://localhost:5000/sunday-leagues/new', data).then((res) => {
      console.log('league added');
    });
  };

  return (
    <div>
      <h1>Home</h1>
      <Link to="/my-sunday-leagues">My Sunday Leagues</Link>
      <h2>Hello {user.firstName}</h2>
      <button onClick={() => setCreateLeague(!createLeague)}>
        Create Sunday League
      </button>
      {createLeague ? (
        <div>
          <form onSubmit={submitLeague}>
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
