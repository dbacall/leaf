import React from 'react';
import styles from './Therapist.module.scss';
import { Link } from 'react-router-dom'
import Loader from '../commons/Loader'
import { differenceInYears } from 'date-fns'
import Meetings from '../Meetings/MeetingsContainer'

const Therapist = ({ therapist, status, category }) => {

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
              <div>
                <div className={styles.imageContainer}>
                  <img className={styles.therapistImage} src={require(`../../../../uploads/${therapist.photo[0].photo}`)}></img>
                </div>
              </div>
            ) : null}
            <div>
              <div className={styles.therapistDetails}>
                <h2 className={styles.title}>{therapist.user[0].firstName} {therapist.user[0].surname}</h2>
                <div className={styles.detailsList}>
                  <p><span>Years Experience:</span><span>{therapist.yearsExperience}</span></p>
                  <p><span>Age:</span><span>{findAge()}</span></p>
                  <p><span>Phone:</span><span>0{therapist.phone}</span></p>
                  <p><span>Email:</span><span>{therapist.user[0].email}</span></p>
                </div>
              </div>
            </div>
          </div>
          <Link to="/meeting-form">Add a Meeting</Link>
          <Meetings category={category} />

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
