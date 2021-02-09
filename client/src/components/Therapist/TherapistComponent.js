import React from 'react';
import styles from './Therapist.module.scss';
import { Link } from 'react-router-dom'
import Loader from '../commons/Loader'
import { differenceInYears } from 'date-fns'

const Therapist = ({ therapist, status }) => {

  const findAge = () => {
    const dateToday = Date.now()
    return differenceInYears(dateToday, new Date(therapist.dateOfBirth))
  }

  const renderTherapist = () => {
    if (therapist) {
      return (
        <div>
          <div className={styles.therapistProfile}>
            {therapist.photo.length > 0 ? (
              <div className={styles.imageContainer}>
                <img className={styles.therapistImage} src={require(`../../../../uploads/${therapist.photo[0].photo}`)}></img>
              </div>
            ) : null}

            <div className={styles.therapistDetails}>
              <h2 className={styles.title}>{therapist.user[0].firstName} {therapist.user[0].surname}</h2>
              <ul>
                <li>Years Experience: {therapist.yearsExperience}</li>
                <li>Age: {findAge()}</li>
                <li>Phone: 0{therapist.phone}</li>
                <li>Email: {therapist.user[0].email}</li>
              </ul>

            </div>

          </div>
        </div>
      )
    }
  }

  return (
    <div className={styles.therapist}>
      {status === 'loading' ? (
        <Loader />
      ) : (
          renderTherapist()
        )}

    </div>
  );
};

export default Therapist;
