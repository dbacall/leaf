import React from 'react';
import styles from './Therapist.module.scss';
import { Link } from 'react-router-dom';
import Loader from '../commons/Loader';
import { differenceInYears } from 'date-fns';
import Meetings from '../Meetings/MeetingsContainer';

const Therapist = ({ user, therapist, status, category }) => {
  const findAge = () => {
    const dateToday = Date.now();
    return differenceInYears(dateToday, new Date(therapist.dateOfBirth));
  };

  const renderTherapist = () => {
    if (therapist) {
      return (
        <div>
          <div className={styles.therapistProfile}>
            {therapist.photo.length > 0 ? (
              <div>
                <div className={styles.imageContainer}>
                  <img
                    className={styles.therapistImage}
                    src={require(`../../../../uploads/${therapist.photo[0].photo}`)}
                    alt={`${therapist.user[0].firstName} ${therapist.user[0].surname}`}
                  ></img>
                </div>
              </div>
            ) : null}
            <div>
              <div className={styles.therapistDetails}>
                <h2 className={styles.title}>
                  {therapist.user[0].firstName} {therapist.user[0].surname}
                </h2>
                <div className={styles.detailsList}>
                  <p>
                    <span>Years Experience:</span>
                    <span>{therapist.yearsExperience}</span>
                  </p>
                  <p>
                    <span>Age:</span>
                    <span>{findAge()}</span>
                  </p>
                  {therapist.pricePerHour && (
                    <p>
                      <span>Price per hour:</span>
                      <span>£{therapist.pricePerHour}</span>
                    </p>
                  )}

                  <p>
                    <span>Email:</span>
                    <span>{therapist.user[0].email}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.meetingBtnContainer}>
            {renderAddMeetingButton()}
          </div>
          <Meetings category={category} />
        </div>
      );
    }
  };

  const renderAddMeetingButton = () => {
    if (user) {
      if (user.id === therapist.user[0].id) {
        return (
          <Link to="/meeting-form" className={styles.meetingBtn}>
            Add a Meeting
          </Link>
        );
      }
    }
  };

  return (
    <div className={styles.therapist}>
      {status === 'loading' ? <Loader /> : renderTherapist()}
    </div>
  );
};

export default Therapist;
