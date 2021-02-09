import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Meetings from './MeetingsComponent';
import { fetchMeetingsByCategory } from '../../redux/thunks/MeetingsThunks';
import { useParams } from 'react-router-dom'

const MeetingsContainer = ({ category }) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);

  const { status, meetings } = useSelector((state) => state.meetings)

  const { selectedTherapist } = useSelector((state) => state.therapists);

  const isInitialMount = useRef(true);

  useEffect(() => {
    console.log('category', category);
    if (
      isInitialMount.current
    ) {
      isInitialMount.current = false;
      dispatch(fetchMeetingsByCategory({ category, therapistId: selectedTherapist.id }));
    }
  }, []);

  return <Meetings user={user} meetings={meetings} status={status} />;
};

export default MeetingsContainer;
