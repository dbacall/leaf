import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';
import { Link } from 'react-router-dom';

const SundayLeagueTeam = ({ team, submitPlayer, players, status }) => {
  const [addPlayer, setAddPlayer] = useState(false);
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    submitPlayer(name, position);
    setName('');
    setPosition('');
  };

  return (
    <div>
      <h1>{team.name}</h1>
      <button onClick={() => setAddPlayer(!addPlayer)}>Add Player</button>
      {addPlayer ? (
        <div>
          <form onSubmit={handleSubmit}>
            <input
              className="add-team-input"
              type="text"
              placeholder="Player name here..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>
              <input
                type="radio"
                value="Goalkeeper"
                checked={position === 'Goalkeeper'}
                onChange={(e) => setPosition(e.target.value)}
              />
              Goalkeeper
            </label>
            <label>
              <input
                type="radio"
                value="Defender"
                checked={position === 'Defender'}
                onChange={(e) => setPosition(e.target.value)}
              />
              Defender
            </label>
            <label>
              <input
                type="radio"
                value="Midfielder"
                checked={position === 'Midfielder'}
                onChange={(e) => setPosition(e.target.value)}
              />
              Midfielder
            </label>
            <label>
              <input
                type="radio"
                value="Forward"
                checked={position === 'Forward'}
                onChange={(e) => setPosition(e.target.value)}
              />
              Forward
            </label>
            <button className="team-submit-btn">Add</button>
          </form>
        </div>
      ) : null}
      <h2>Players</h2>
      {status === 'loading' ? (
        <ReactLoading type={'spin'} color={'black'} height={40} width={40} />
      ) : players ? (
        players.map((player, index) => {
          return (
            <div key={index}>
              <Link
                to={{
                  pathname: `/sunday-league/${player._id}`,
                  state: { player },
                }}
              >
                {player.name} - {player.position}
              </Link>
            </div>
          );
        })
      ) : null}
    </div>
  );
};

export default SundayLeagueTeam;
