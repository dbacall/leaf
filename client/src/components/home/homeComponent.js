import React, { useState } from 'react';
import './homeStyles.css';
import { Link } from 'react-router-dom';
import api from '../../services/api';

const Home = ({ user }) => {
  const [createLeague, setCreateLeague] = useState(false);
  const [leagueName, setLeagueName] = useState('');

  const submitLeague = (e) => {
    e.preventDefault();
    const data = {
      leagueName: leagueName,
      owner: user.id,
    };

    const path = '/sunday-leagues/new';

    const response = api.request('post', data, path);

    console.log(response);

    // axios.get(`http://localhost:5000/sunday-leagues/${user.id}`).then((res) => {
    //   console.log('league added', res);
    // });
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
