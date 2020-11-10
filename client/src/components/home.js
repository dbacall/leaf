import React, { useState, useEffect } from 'react';
import './styles/home.css';
import axios from 'axios';

const Home = (props) => {
  const [createLeague, setCreateLeague] = useState(false);
  const [leagueName, setLeagueName] = useState('');

  const submitLeague = () => {
    const data = {
      leagueName: leagueName,
      owner: props.user.id,
    };

    axios.post('http://localhost:5000/sunday-leagues/new', data).then((res) => {
      console.log('league added');
    });
  };

  return (
    <div>
      <h1>Home</h1>
      <h2>Hello {props.user.name}</h2>
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
