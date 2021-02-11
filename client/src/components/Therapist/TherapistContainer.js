import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Therapist from './TherapistComponent';
import { fetchTherapist } from '../../redux/thunks/TherapistsThunks';
import { useParams } from 'react-router-dom';

const TherapistContainer = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);

  const { status, selectedTherapist } = useSelector(
    (state) => state.therapists
  );
  const { id, category } = useParams();

  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      dispatch(fetchTherapist(id));
    }
  }, []);

  return (
    <Therapist
      user={user}
      therapist={selectedTherapist}
      status={status}
      category={category}
    />
  );
};

export default TherapistContainer;
