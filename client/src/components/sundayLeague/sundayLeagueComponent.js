import React, { useState, useEffect } from 'react';
import './sundayLeagueStyles.css';
import ReactLoading from 'react-loading';
import { Link } from 'react-router-dom';

const SundayLeague = ({ league, submitTeam, status, teams }) => {
  const [addTeam, setAddTeam] = useState(false);
  const [teamName, setTeamName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    submitTeam(teamName);
    setTeamName('');
  };

  return (
    <div>
      <h1>{league.leagueName}</h1>
      <button onClick={() => setAddTeam(!addTeam)}>Add Team</button>
      {addTeam ? (
        <div>
          <form onSubmit={handleSubmit}>
            <input
              className="add-team-input"
              type="text"
              placeholder="Team name here..."
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
            />
            <button className="team-submit-btn">Add</button>
          </form>
        </div>
      ) : null}
      <h2>Teams</h2>
      {status === 'loading' ? (
        <ReactLoading type={'spin'} color={'black'} height={40} width={40} />
      ) : teams ? (
        teams.map((team, index) => {
          return (
            <div key={index}>
              <Link
                to={{
                  pathname: `/sunday-league/${league._id}`,
                  state: { league: league },
                }}
              >
                {team.teamName}
              </Link>
            </div>
          );
        })
      ) : null}
    </div>
  );
};

export default SundayLeague;
