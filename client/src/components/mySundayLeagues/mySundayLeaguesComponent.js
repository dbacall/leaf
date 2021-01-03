import React from 'react';
import ReactLoading from 'react-loading';
import { Link } from 'react-router-dom';

const MySundayLeagues = ({ status, leagues }) => {
  return (
    <div>
      <h1>My Sunday Leagues</h1>

      {status === 'loading' ? (
        <ReactLoading type={'spin'} color={'black'} height={40} width={40} />
      ) : (
        leagues.map((league) => {
          return (
            <div>
              <Link
                to={{
                  pathname: `/sunday-league/${league._id}`,
                  state: { league },
                }}
              >
                {league.leagueName}
              </Link>
            </div>
          );
        })
      )}
    </div>
  );
};

export default MySundayLeagues;
