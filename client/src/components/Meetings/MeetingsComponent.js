import React from 'react';
import styles from './Meetings.module.scss';
import { Link } from 'react-router-dom'
import Loader from '../commons/Loader'
import { format, parseISO } from 'date-fns';

const Meetings = ({ meetings, status }) => {


  const renderMeetingRows = () => {
    if (meetings) {
      return (
        meetings.map((meeting, index) => (
          <tr key={index}>
            <td>{format(parseISO(meeting.time), 'Pp')}</td>
            <td>{meeting.category}</td>
            <td>{meeting.hours}:{meeting.minutes}</td>
            <td><a href={`https://${meeting.videoLink}`} target="_blank">Link</a></td>
          </tr>
        ))
      )
    }
  }

  return (
    <div className={styles.meetings}>
      {status === 'loading' ? (
        <Loader />
      ) : (
          <table>
            <thead>
              <tr>
                <th>Date & Time</th>
                <th>Category</th>
                <th>Length</th>
                <th>Meeting Link</th>
              </tr>
            </thead>
            <tbody>
              {renderMeetingRows()}
            </tbody>
          </table>
        )}

    </div>
  );
};

export default Meetings;
