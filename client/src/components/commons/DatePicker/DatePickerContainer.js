import React from 'react';
import DatePicker from './DatePickerComponent';

const DatePickerContainer = ({ setDate, value, dateAndTime }) => {
  return (
    <DatePicker setDate={setDate} value={value} dateAndTime={dateAndTime} />
  );
};

export default DatePickerContainer;
