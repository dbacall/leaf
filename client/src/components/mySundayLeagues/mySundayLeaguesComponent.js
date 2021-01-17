import React from 'react';
import Loader from '../Loader'
import { Link } from 'react-router-dom';

const MySundayLeagues = ({ status, leagues }) => {
  return (
    <div>
      <h1>My Sunday Leagues</h1>

      {status === 'loading' ? (
        <Loader />
      ) : (
          leagues.map((league) => {
            return (
              <div key={league.id}>
                <Link
                  to={{
                    pathname: `/sunday-league/${league.id}`,
                    state: { league },
                  }}
                >
                  {league.name}
                </Link>
              </div>
            );
          })
        )}
    </div>
  );
};

export default MySundayLeagues;
