import React, { useState, useEffect } from 'react';
import './styles/sunday-league.css';

const SundayLeague = ({ league }) => {
  const [addTeam, setAddTeam] = useState(false);
  const [teamName, setTeamName] = useState('');

  return (
    <div>
      <h1>{league.leagueName}</h1>
      <button onClick={() => setAddTeam(!addTeam)}>Add Team</button>
      {addTeam ? (
        <div>
          <form>
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
    </div>
  );
};

export default SundayLeague;
