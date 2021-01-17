import React from 'react';
import Loader from '../Loader'

const SundayLeagueTableComponent = ({
  results,
  status,
}) => {

  return (
    <div>
      {status === 'loading' ? (
        <Loader />
      ) : (
          < div >
            <h2>Table</h2>
            <table>
              <thead>
                <tr>
                  <th>Team</th>
                  <th>Played</th>
                  <th>Won</th>
                  <th>Lost</th>
                  <th>Drawn</th>
                  <th>GF</th>
                  <th>GA</th>
                  <th>Points</th>
                </tr>
              </thead>
              <tbody>
                {results.map(result => (
                  <tr key={result.id}>
                    <td>{result.name}</td>
                    <td>{result.won + result.lost + result.drawn}</td>
                    <td>{result.won}</td>
                    <td>{result.lost}</td>
                    <td>{result.drawn}</td>
                    <td>{result.goalsFor}</td>
                    <td>{result.goalsAgainst}</td>
                    <td>{result.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      }
    </div >
  );
};

export default SundayLeagueTableComponent;