import React, { useState } from 'react';
import './sundayLeagueStyles.css';
import ReactLoading from 'react-loading';
import { Link } from 'react-router-dom';
import SundayLeagueSeason from '../sundayLeagueSeason/sundayLeagueSeasonContainer';

const SundayLeague = ({ league, submitTeam, status, teams }) => {
  const [addTeam, setAddTeam] = useState(false);
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    submitTeam(name);
    setName('');
  };

  return (
    <div>
      <h1>{league.name}</h1>
      <button onClick={() => setAddTeam(!addTeam)}>Add Team</button>
      {addTeam ? (
        <div>
          <form onSubmit={handleSubmit}>
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
      <h2>Teams</h2>
      {status === 'loading' ? (
        <ReactLoading type={'spin'} color={'black'} height={40} width={40} />
      ) : teams.length > 0 ? (
        <div>
          {teams.map((team, index) => {
            return (
              <div key={index}>
                <Link
                  to={{
                    pathname: `/sunday-league/team/${team._id}`,
                    state: { team },
                  }}
                >
                  {team.name}
                </Link>
              </div>
            );
          })}
          <SundayLeagueSeason league={league} />
        </div>
      ) : null}
    </div>
  );
};

export default SundayLeague;
