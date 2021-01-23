import React from 'react';
import Loader from '../Loader'
import styles from './sundayLeagueTable.module.scss'

const SundayLeagueTableComponent = ({
  results,
  status,
  league,
}) => {

  return (
    <section className={styles.table}>
      {status === 'loading' ? (
        <Loader />
      ) : (
          < div >
            <h3 className={styles.title}>{league.name} Table</h3>
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
    </section >
  );
};

export default SundayLeagueTableComponent;