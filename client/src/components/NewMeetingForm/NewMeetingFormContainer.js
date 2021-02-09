import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import NewMeetingForm from './NewMeetingFormComponent';
import api from '../../services/api'

const NewMeetingFormContainer = () => {
  const [redirect, setRedirect] = useState(false)

  const user = useSelector((state) => state.auth.user);

  const { selectedTherapist } = useSelector((state) => state.therapists);

  const createMeeting = async (data) => {
    const path = '/meeting';

    await api.request({ method: 'post', data, path });

    setRedirect(true)
  }

  return <NewMeetingForm createMeeting={createMeeting} redirect={redirect} therapist={selectedTherapist} />;
};

export default NewMeetingFormContainer;
