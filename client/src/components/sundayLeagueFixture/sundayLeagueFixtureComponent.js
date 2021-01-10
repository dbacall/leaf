import React, { useState } from 'react';
import ReactLoading from 'react-loading';
import { format, parseISO } from 'date-fns';
// import { Link } from 'react-router-dom';

const SundayLeagueFixtureComponent = ({
  // createNewFixture,
  fixture,
  status,
  teams,
}) => {
  const [homeTeamGoal, setHomeTeamGoal] = useState(false);
  const [awayTeamGoal, setAwayTeamGoal] = useState(false);
  // const [homeTeam, setHomeTeam] = useState('');
  // const [awayTeam, setAwayTeam] = useState('');

  const handleSubmit = (e, team) => {
    e.preventDefault();

    // createNewGoal(homeTeam, awayTeam, date);
    setHomeTeamGoal(false);
    setAwayTeamGoal(false);
  };

  const getName = (teamId) => {
    console.log('teams', teams);
    return teams.find((team) => team._id == teamId).name;
  };

  return (
    <div>
      {status === 'loading' ? (
        <ReactLoading type={'spin'} color={'black'} height={40} width={40} />
      ) : fixture && typeof fixture === 'object' && teams ? (
        <div>
          <button onClick={() => setHomeTeamGoal(!homeTeamGoal)}>
            Add Goal
          </button>
          {/* {homeTeamGoal ? (
            <div>
              <form>
                <select
                  value={homeTeam}
                  onChange={(e) => {
                    setHomeTeam(e.target.value);
                  }}
                >
                  <option value="" disabled>
                    Select Player:
                  </option>
                  {players.map((team) => {
                    return <option value={team.id}>{team.name}</option>;
                  })}
                </select>

                <select
                  value={awayTeam}
                  onChange={(e) => {
                    setAwayTeam(e.target.value);
                  }}
                >
                  <option value="" disabled>
                    Select Away Team:
                  </option>
                  {teams.map((team) => {
                    return <option value={team.id}>{team.name}</option>;
                  })}
                </select>

                <DatePicker
                  selected={date}
                  onChange={(date) => setDate(date)}
                  showTimeSelect
                  dateFormat="Pp"
                />

                <button className="team-submit-btn">Create Fixture</button>
              </form>
            </div>
          ) : null} */}
          <h3>{format(parseISO(fixture.date), 'PPPPp')}</h3>
          <h2 key={fixture._id}>
            {getName(fixture.homeTeam)} vs {getName(fixture.awayTeam)}
          </h2>
        </div>
      ) : null}
    </div>
  );
};

export default SundayLeagueFixtureComponent;
