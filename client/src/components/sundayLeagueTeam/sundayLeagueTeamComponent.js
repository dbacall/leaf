import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';
import { Link } from 'react-router-dom';

const SundayLeagueTeam = ({ team }) => {
  const [addPlayer, setAddPlayer] = useState(false);
  const [name, setName] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   submitTeam(name);
  //   setName('');
  // };

  return (
    <div>
      <h1>{team.name}</h1>
      <button onClick={() => setAddPlayer(!addPlayer)}>Add Player</button>
      {addPlayer ? (
        <div>
          <form>
            <input
              className="add-team-input"
              type="text"
              placeholder="Team name here..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button className="team-submit-btn">Add</button>
          </form>
        </div>
      ) : null}
      <h2>Players</h2>
      {/* {status === 'loading' ? (
        <ReactLoading type={'spin'} color={'black'} height={40} width={40} />
      ) : players ? (
        players.map((player, index) => {
          return (
            <div key={index}>
              <Link
                to={{
                  pathname: `/sunday-league/${league._id}`,
                  state: { league: league },
                }}
              >
                {player.name}
              </Link>
            </div>
          );
        })
      ) : null} */}
    </div>
  );
};

export default SundayLeagueTeam;
