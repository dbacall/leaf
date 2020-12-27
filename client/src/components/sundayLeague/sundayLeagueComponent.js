import React, { useState, useEffect } from 'react';
import './sundayLeagueStyles.css';

const SundayLeague = ({ league, submitTeam }) => {
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
            <button>Add</button>
          </form>
        </div>
      ) : null}
      <h2>Teams</h2>
    </div>
  );
};

export default SundayLeague;
