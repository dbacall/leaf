import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const MySundayLeagues = (props) => {
  return (
    <div>
      <h1>My Sunday Leagues</h1>

      {props.sundayLeagues.leagues.length > 0
        ? props.sundayLeagues.leagues.map((league) => {
            return <p>{league.leagueName}</p>;
          })
        : null}
    </div>
  );
};

MySundayLeagues.propTypes = {
  leagues: PropTypes.array,
};

MySundayLeagues.defaultProps = {
  leagues: [],
};

export default MySundayLeagues;
