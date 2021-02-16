import React, { useState } from 'react';
import styles from './NewMeetingForm.module.scss';
import DatePicker from '../commons/DatePicker/DatePickerContainer';
import { Redirect } from 'react-router-dom';
import classnames from 'classnames';

const NewMeetingForm = ({ createMeeting, redirect, therapist, errors }) => {
  const [time, setTime] = useState(new Date());
  const [category, setCategory] = useState('');
  const [hours, setHours] = useState(null);
  const [minutes, setMinutes] = useState(null);
  const [videoLink, setVideoLink] = useState(null);

  const renderCategoryOptions = () => {
    return therapist.categories.map((category, index) => {
      return (
        <option value={category} key={index}>
          {category}
        </option>
      );
    });
  };

  const submitMeeting = (e) => {
    e.preventDefault();
    createMeeting({
      time,
      category,
      hours,
      minutes,
      videoLink,
      therapistId: therapist.id,
    });
  };

  const renderRedirect = () => {
    if (redirect) {
      return <Redirect to={`/therapist/${therapist.id}`} />;
    }
  };

  return (
    <div className={styles.newMeetingForm}>
      <h2 className={styles.title}>Add A Meeting</h2>
      <div className={styles.formContainer}>
        <form onSubmit={submitMeeting}>
          <div>
            <DatePicker setDate={setTime} value={time} dateAndTime />
            <p className={styles.warning}>
              {errors.time && errors.time.message}
            </p>
          </div>

          <div>
            <select
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              className={classnames('', {
                [styles.inputWarning]: errors.category,
              })}
            >
              <option value="" disabled>
                Select Category:
              </option>
              {renderCategoryOptions()}
            </select>
            <p className={styles.warning}>
              {errors.category && errors.category.message}
            </p>
          </div>
          <div>
            <input
              onChange={(e) => setHours(e.target.value)}
              value={hours}
              placeholder="Meeting Hours"
              className={classnames('', {
                [styles.inputWarning]: errors.hours,
              })}
            />
            <p className={styles.warning}>
              {errors.hours && errors.hours.message}
              {errors.hours && errors.hours.reason && `Hours must be a number`}
            </p>
          </div>
          <div>
            <input
              onChange={(e) => setMinutes(e.target.value)}
              value={minutes}
              placeholder="Meeting Minutes"
              className={classnames('', {
                [styles.inputWarning]: errors.minutes,
              })}
            />
            <p className={styles.warning}>
              {errors.minutes && errors.minutes.message}
              {errors.minutes &&
                errors.minutes.reason &&
                `Minutes must be a number`}
            </p>
          </div>
          <div>
            <input
              onChange={(e) => setVideoLink(e.target.value)}
              value={videoLink}
              placeholder="Video Link"
              className={classnames('', {
                [styles.inputWarning]: errors.videoLink,
              })}
            />
            {errors.videoLink && (
              <p className={styles.warning}>{errors.videoLink.message}</p>
            )}
          </div>

          <button className={styles.submitBtn}>Submit</button>
        </form>
      </div>
      {renderRedirect()}
    </div>
  );
};

export default NewMeetingForm;
