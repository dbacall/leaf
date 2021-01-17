import React from 'react';
import ReactLoading from 'react-loading';

const SundayLeagueTableComponent = ({
  results,
  status,
}) => {

  return (
    <div>
      {status === 'loading' ? (
        <ReactLoading type={'spin'} color={'black'} height={40} width={40} />
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