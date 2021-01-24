import React, { useState } from 'react';
import Loader from '../Loader'
import { Link } from 'react-router-dom';
import SundaySeason from '../sundaySeason/sundaySeasonContainer';
import SundayTable from '../sundayTable/sundayTableContainer';
import styles from './sundayLeague.module.scss'

const SundayLeague = ({ league, status, currentLeagueUpdated }) => {


  return (
    status === 'loading' || !currentLeagueUpdated ? (
      <Loader />
    ) : (
        <section className={styles.league}>
          <h1 className={styles.title}>{league.name}</h1>
          <SundaySeason league={league} />

        </section>

      )
  )

};

export default SundayLeague;
