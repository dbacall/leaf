import React from 'react';
import {
  KeyboardDateTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import styles from './DatePicker.module.scss';

const DatePicker = ({ setDate, dateAndTime, value }) => {
  const today = new Date();

  return (
    <div className={styles.datePickerContainer}>
      {dateAndTime ? (
        <KeyboardDateTimePicker
          className={styles.datePicker}
          minDate={today}
          minDateMessage="Please select a future date"
          autoOk
          variant="inline"
          label="Date and Time"
          format="MM/dd/yyyy HH:mm"
          value={value}
          // InputAdornmentProps={{ position: 'start' }}
          onChange={(dateAndTime) => setDate(dateAndTime)}
          ampm={false}
        />
      ) : (
        <KeyboardDatePicker
          className={styles.datePicker}
          autoOk
          variant="inline"
          label="Date Of Birth (mm/dd/yyyy)"
          format="MM/dd/yyyy"
          value={value}
          // InputAdornmentProps={{ position: 'start' }}
          onChange={(date) => setDate(date)}
        />
      )}
    </div>
  );
};

export default DatePicker;
