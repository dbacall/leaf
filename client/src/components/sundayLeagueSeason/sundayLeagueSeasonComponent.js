import React, { useState } from 'react';
import Loader from '../Loader'
import SundayLeagueGameweek from '../sundayLeagueGameweek/sundayLeagueGameweekContainer';

const SundayLeagueSeasonComponent = ({ createNewSeason, season, status }) => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const previousYear = currentYear - 1;
  const nextYear = currentYear + 1;

  const [newSeason, setNewSeason] = useState(false);
  const [yearFrom, setYearFrom] = useState(currentYear);
  const [yearTo, setYearTo] = useState(nextYear);

  const handleSubmit = (e) => {
    e.preventDefault();

    createNewSeason(parseInt(yearFrom), parseInt(yearTo));
    setNewSeason(false);
  };

  return (
    <div>
      <h2>Season</h2>
      <button onClick={() => setNewSeason(!newSeason)}>Start New Season</button>
      {newSeason ? (
        <div>
          <form onSubmit={handleSubmit}>
            <label>
              Start Year:
              <select
                value={yearFrom}
                onChange={(e) => {
                  setYearFrom(e.target.value);
                }}
              >
                <option value={previousYear}>{previousYear}</option>
                <option value={currentYear}>{currentYear}</option>
                <option value={nextYear}>{nextYear}</option>
                <option value={nextYear + 1}>{nextYear + 1}</option>
              </select>
            </label>

            <label>
              End Year:
              <select
                value={yearTo}
                onChange={(e) => {
                  setYearTo(e.target.value);
                }}
              >
                <option value={previousYear}>{previousYear}</option>
                <option value={currentYear}>{currentYear}</option>
                <option value={nextYear}>{nextYear}</option>
                <option value={nextYear + 1}>{nextYear + 1}</option>
              </select>
            </label>
            <button className="team-submit-btn">Create New Season</button>
          </form>
        </div>
      ) : null}
      {status === 'loading' ? (
        <Loader />
      ) : season ? (
        season.yearFrom === season.yearTo ? (
          <div>
            <h3>{season.yearFrom}</h3>
            <SundayLeagueGameweek />
          </div>
        ) : (
            <div>
              <h3>
                {season.yearFrom}/{season.yearTo}
              </h3>
              <SundayLeagueGameweek />
            </div>
          )
      ) : null}
    </div>
  );
};

export default SundayLeagueSeasonComponent;
