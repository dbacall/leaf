import React, { useState } from 'react';
import styles from './NewMeetingForm.module.scss';
import { DateTimePicker } from "@material-ui/pickers";
import { Redirect } from 'react-router-dom'
import classnames from 'classnames';

const categories = [
  {
    name: 'Mums',
  },
  {
    name: 'Cheese Addiction',
  },
]

const NewMeetingForm = ({ createMeeting, redirect }) => {

  const [time, setTime] = useState('')
  const [category, setCategory] = useState('')
  const [hours, setHours] = useState('')
  const [minutes, setMinutes] = useState('')
  const [videoLink, setVideoLink] = useState('')

  const renderCategoryOptions = () => {
    return categories.map((category, index) => {
      return (
        <option value={category.name} key={index}>
          {category.name}
        </option>
      )
    })
  }

  const submitMeeting = (e) => {
    e.preventDefault();
    createMeeting({

    })
  }

  const renderRedirect = () => {
    if (redirect) {
      return <Redirect to='/' />
    }
  }

  return (
    <div className={styles.newMeetingForm}>
      <h2 className={styles.title}>Add A Meeting</h2>
      <div className={styles.formContainer}>
        <form onSubmit={submitMeeting}>
          <div>
            <DateTimePicker
              autoOk
              // variant="inline"
              inputVariant="outlined"
              label="Date and Time of Meeting"
              // format="MM/dd/yyyy"
              value={time}
              InputAdornmentProps={{ position: "start" }}
              onChange={dateAndTime => setTime(dateAndTime)}
              ampm={false}
            />
          </div>

          <div>
            <select
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
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
