import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import NewMeetingForm from './NewMeetingFormComponent';
import api from '../../services/api'

const NewMeetingFormContainer = () => {
  const [redirect, setRedirect] = useState(false)

  const user = useSelector((state) => state.auth.user);

  const createMeeting = async (data, photo) => {

    const MeetingPath = '/Meeting';

    const Meeting = await api.request({ method: 'post', data, path: MeetingPath });

    setRedirect(true)
  }

  return <NewMeetingForm user={user} createMeeting={createMeeting} redirect={redirect} />;
};

export default NewMeetingFormContainer;
