import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Meetings from './MeetingsComponent';
import { fetchMeetingsByCategory, fetchMeetingsByTherapist } from '../../redux/thunks/MeetingsThunks';

const MeetingsContainer = ({ category }) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);

  const { status, meetings } = useSelector((state) => state.meetings)

  const { selectedTherapist } = useSelector((state) => state.therapists);

  useEffect(() => {
    if (category) {
      dispatch(fetchMeetingsByCategory({ category, therapistId: selectedTherapist.id }));
    } else {
      dispatch(fetchMeetingsByTherapist(selectedTherapist.id));
    }
  }, [category]);

  return <Meetings user={user} meetings={meetings} status={status} />;
};

export default MeetingsContainer;
