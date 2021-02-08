import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Category from './CategoryComponent';
import { fetchTherapistsForCategory } from '../../redux/thunks/TherapistsThunks';
import { useParams } from 'react-router-dom'


const CategoryContainer = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);

  const { status, therapists } = useSelector((state) => state.therapists)
  const { category } = useParams()

  const isInitialMount = useRef(true);

  useEffect(() => {
    if (
      isInitialMount.current
    ) {
      isInitialMount.current = false;
      dispatch(fetchTherapistsForCategory(category));
    }
  }, [therapists]);

  return <Category user={user} therapists={therapists} status={status} />;
};

export default CategoryContainer;
