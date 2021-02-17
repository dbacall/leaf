import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NewTherapistForm from './NewTherapistFormComponent';
import api from '../../services/api';
import axios from 'axios';
import { updateUser } from '../../redux/actions/authActions';

const url = process.env.REACT_APP_API_URL;

const NewTherapistFormContainer = () => {
  const [redirect, setRedirect] = useState(false);
  const [errors, setErrors] = useState({});
  const [therapist, setTherapist] = useState('');

  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);

  const createTherapist = async (data, photo) => {
    const therapistPath = '/therapist';

    const therapist = await api.request({
      method: 'post',
      data,
      path: therapistPath,
    });

    if (therapist.error) {
      setErrors(therapist.errors);
    } else {
      setTherapist(therapist.data.data);
      const therapistId = therapist.data.data.id;

      if (photo) {
        var photoData = new FormData();

        photoData.append('therapist', therapistId);
        photoData.append('photo', photo);

        const config = {
          headers: {
            'Content-type': 'multipart/form-data',
          },
        };

        await axios.post(`${url}/photo`, photoData, config);
      }

      const updatedUser = await api.request({
        method: 'put',
        data: { therapistId },
        path: `/users/${user.id}`,
      });

      dispatch(updateUser(updatedUser.data.data));

      setRedirect(true);
    }
  };

  return (
    <NewTherapistForm
      user={user}
      createTherapist={createTherapist}
      redirect={redirect}
      errors={errors}
      therapist={therapist}
    />
  );
};

export default NewTherapistFormContainer;
