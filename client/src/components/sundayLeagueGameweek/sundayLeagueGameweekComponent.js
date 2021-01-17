import React from 'react';
import Loader from '../Loader'
import SundayLeagueFixtures from '../sundayLeagueFixtures/sundayLeagueFixturesContainer';

const SundayLeagueGameweekComponent = ({
  createNewGameweek,
  gameweek,
  status,
  getPrevious,
  getNext,
  completeGameweek
}) => {
  const handleClick = (e) => {
    e.preventDefault();

    createNewGameweek();
  };

  const handlePrevious = (e) => {
    e.preventDefault();
    getPrevious();
  };

  const handleNext = (e) => {
    e.preventDefault();
    getNext();
  };

  return (
    <div>
      <h2>Gameweek</h2>
      <button onClick={handleClick}>Start Next Gameweek</button>

      {status === 'loading' ? (
        <Loader />
      ) : gameweek ? (
        <h4>{gameweek.number}</h4>
      ) : null}

      <SundayLeagueFixtures gameweek={gameweek} />
      {gameweek && gameweek.number > 1 ? (
        <a href="" onClick={handlePrevious}>
          Previous
        </a>
      ) : null}
      <button onClick={() => completeGameweek()}>Complete Gameweek & Update Table</button>
      <a href="" onClick={handleNext}>
        Next
      </a>
    </div>
  );
};

export default SundayLeagueGameweekComponent;
