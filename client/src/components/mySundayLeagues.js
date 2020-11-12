import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactLoading from 'react-loading';

const MySundayLeagues = (props) => {
  return (
    <div>
      <h1>My Sunday Leagues</h1>

      {props.status == 'loading' ? (
        <ReactLoading type={'spin'} color={'black'} height={40} width={40} />
      ) : (
        props.leagues.map((league) => {
          return <p>{league.leagueName}</p>;
        })
      )}
    </div>
  );
};

MySundayLeagues.propTypes = {
  leagues: PropTypes.array,
  status: PropTypes.string,
};

MySundayLeagues.defaultProps = {
  leagues: [],
  status: 'loading',
};

export default MySundayLeagues;
