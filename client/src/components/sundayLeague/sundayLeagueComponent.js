import React, { useState } from 'react';
import Loader from '../Loader'
import { Link } from 'react-router-dom';
import SundaySeason from '../sundaySeason/sundaySeasonContainer';
import SundayLeagueTable from '../sundayLeagueTable/sundayLeagueTableContainer';
import styles from './sundayLeague.module.scss'

const SundayLeague = ({ league, submitTeam, status, teams }) => {
  const [addTeam, setAddTeam] = useState(false);
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    submitTeam(name);
    setName('');
  };

  return (
    status === 'loading' ? (
      <Loader />
    ) : (
        <section className={styles.league}>
          <h1 className={styles.title}>{league.name}</h1>
          <SundaySeason league={league} />
          {/* <button onClick={() => setAddTeam(!addTeam)}>Add Team</button>
          {addTeam ? (
            <div>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Team name here..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <button className="team-submit-btn">Add</button>
              </form>
            </div>
          ) : (null)}

          <div>
            {teams.map((team, index) => {
              return (
                <div key={index}>
                  <Link
                    to={{
                      pathname: `/sunday-league/team/${team._id}`,
                      state: { team },
                    }}
                  >
                    {team.name}
                  </Link>
                </div>
              );
            })}

          </div> */}

        </section>

      )
  )

};

export default SundayLeague;
