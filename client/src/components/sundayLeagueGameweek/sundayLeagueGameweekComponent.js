import React from 'react';
import ReactLoading from 'react-loading';
import SundayLeagueFixtures from '../sundayLeagueFixtures/sundayLeagueFixturesContainer';

const SundayLeagueGameweekComponent = ({
  createNewGameweek,
  gameweek,
  status,
  getPrevious,
  getNext,
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
        <ReactLoading type={'spin'} color={'black'} height={40} width={40} />
      ) : gameweek ? (
        <h4>{gameweek.number}</h4>
      ) : null}

      <SundayLeagueFixtures gameweek={gameweek} />
      {gameweek && gameweek.number > 1 ? (
        <a href="" onClick={handlePrevious}>
          Previous
        </a>
      ) : null}
      <a href="" onClick={handleNext}>
        Next
      </a>
    </div>
  );
};

export default SundayLeagueGameweekComponent;
