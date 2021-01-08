import React, { useState } from 'react';
import ReactLoading from 'react-loading';

const SundayLeagueGameweekComponent = ({
  createNewGameweek,
  gameweek,
  status,
}) => {
  const handleClick = (e) => {
    e.preventDefault();

    createNewGameweek();
  };

  return (
    <div>
      <h2>Gameweek</h2>
      <button onClick={handleClick}>Start Next Gameweek</button>

      {status === 'loading' ? (
        <ReactLoading type={'spin'} color={'black'} height={40} width={40} />
      ) : (
        <h4>{gameweek.number}</h4>
      )}
    </div>
  );
};

export default SundayLeagueGameweekComponent;
