import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import NewMeetingForm from './NewMeetingFormComponent';
import api from '../../services/api';

const NewMeetingFormContainer = () => {
  const [redirect, setRedirect] = useState(false);
  const [errors, setErrors] = useState({});

  const { selectedTherapist } = useSelector((state) => state.therapists);

  const createMeeting = async (data) => {
    const path = '/meeting';

    const meeting = await api.request({ method: 'post', data, path });

    console.log(meeting);

    if (meeting.errors) {
      setErrors(meeting.errors);
    } else {
      setRedirect(true);
    }
  };

  return (
    <NewMeetingForm
      createMeeting={createMeeting}
      redirect={redirect}
      therapist={selectedTherapist}
      errors={errors}
    />
  );
};

export default NewMeetingFormContainer;
