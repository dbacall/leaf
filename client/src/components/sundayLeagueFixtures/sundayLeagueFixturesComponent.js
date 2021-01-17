import React, { useState } from 'react';
import Loader from '../Loader'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format, parseISO } from 'date-fns';
import { Link } from 'react-router-dom';

const SundayLeagueFixturesComponent = ({
  createNewFixture,
  teams,
  gameweek,
  status,
}) => {
  const [newFixture, setNewFixture] = useState(false);
  const [homeTeam, setHomeTeam] = useState('');
  const [awayTeam, setAwayTeam] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    createNewFixture(homeTeam, awayTeam, date);
    setNewFixture(false);
  };

  const getName = (teamId) => {
    return teams.find((team) => team._id == teamId).name;
  };

  return (
    <div>
      <button onClick={() => setNewFixture(!newFixture)}>Add Fixture</button>
      {newFixture ? (
        <div>
          <form onSubmit={handleSubmit}>
            <select
              value={homeTeam}
              onChange={(e) => {
                setHomeTeam(e.target.value);
              }}
            >
              <option value="" disabled>
                Select Home Team:
              </option>
              {teams.map((team) => {
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
      ) : null}
      {status === 'loading' ? (
        <Loader />
      ) : gameweek ? (
        gameweek.fixtures.map((fixture) => {
          return (
            <p key={fixture._id}>
              <Link
                to={{
                  pathname: `/sunday-league/fixture/${fixture._id}`,
                  state: { fixtureId: fixture._id },
                }}
              >
                {getName(fixture.homeTeam)} vs {getName(fixture.awayTeam)} -{' '}
                {format(parseISO(fixture.date), 'PPPPp')}
              </Link>
            </p>
          );
        })
      ) : null}
    </div>
  );
};

export default SundayLeagueFixturesComponent;
