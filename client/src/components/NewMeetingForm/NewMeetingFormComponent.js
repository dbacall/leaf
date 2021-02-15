import React, { useState } from 'react';
import styles from './NewMeetingForm.module.scss';
import DatePicker from '../commons/DatePicker/DatePickerContainer';
import { Redirect } from 'react-router-dom';
import classnames from 'classnames';

const NewMeetingForm = ({ createMeeting, redirect, therapist }) => {
  const [time, setTime] = useState('');
  const [category, setCategory] = useState('');
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [videoLink, setVideoLink] = useState('');

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
          </div>

          <div>
            <select
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              className={styles.selectCategory}
            >
              <option value="" disabled>
                Select Category:
              </option>
              {renderCategoryOptions()}
            </select>
          </div>
          <div>
            <input
              onChange={(e) => setHours(e.target.value)}
              value={hours}
              placeholder="Meeting Hours"
            />
          </div>
          <div>
            <input
              onChange={(e) => setMinutes(e.target.value)}
              value={minutes}
              placeholder="Meeting Minutes"
            />
          </div>
          <div>
            <input
              onChange={(e) => setVideoLink(e.target.value)}
              value={videoLink}
              placeholder="Video Link"
            />
          </div>

          <button className={styles.submitBtn}>Submit</button>
        </form>
      </div>
      {renderRedirect()}
    </div>
  );
};

export default NewMeetingForm;
