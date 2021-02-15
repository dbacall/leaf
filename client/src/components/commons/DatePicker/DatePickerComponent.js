import React from 'react';
import { DateTimePicker, KeyboardDatePicker } from '@material-ui/pickers';
import styles from './DatePicker.module.scss';

const DatePicker = ({ setDate, dateAndTime, value }) => {
  return (
    <div className={styles.datePickerContainer}>
      <KeyboardDatePicker
        className={styles.datePicker}
        autoOk
        variant="inline"
        // inputVariant="outlined"
        label="Date Of Birth"
        format="MM/dd/yyyy"
        value={value}
        // InputAdornmentProps={{ position: 'start' }}
        onChange={(date) => setDate(date)}
      />
    </div>
  );
};

export default DatePicker;
