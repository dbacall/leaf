import React, { useState } from 'react';
import ReactLoading from 'react-loading';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format, parseISO } from 'date-fns';

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
        <ReactLoading type={'spin'} color={'black'} height={40} width={40} />
      ) : gameweek ? (
        gameweek.fixtures.map((fixture) => {
          return (
            <p key={fixture._id}>
              {getName(fixture.homeTeam)} vs {getName(fixture.awayTeam)} -{' '}
              {format(parseISO(fixture.date), 'PPPPp')}
            </p>
          );
        })
      ) : null}
    </div>
  );
};

export default SundayLeagueFixturesComponent;
