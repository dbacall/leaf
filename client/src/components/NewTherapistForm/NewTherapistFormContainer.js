import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import NewTherapistForm from './NewTherapistFormComponent';
import api from '../../services/api';
import axios from 'axios';

const url = process.env.REACT_APP_API_URL;

const NewTherapistFormContainer = () => {
  const [redirect, setRedirect] = useState(false);
  const [errors, setErrors] = useState({});

  const user = useSelector((state) => state.auth.user);

  const createTherapist = async (data, photo) => {
    const therapistPath = '/therapist';

    const therapist = await api.request({
      method: 'post',
      data,
      path: therapistPath,
    });

    console.log(therapist);

    if (therapist.error) {
      setErrors(therapist.errors);
    } else {
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

      await api.request({
        method: 'put',
        data: { therapistId },
        path: `/users/${user.id}`,
      });

      setRedirect(true);
    }
  };

  return (
    <NewTherapistForm
      user={user}
      createTherapist={createTherapist}
      redirect={redirect}
      errors={errors}
    />
  );
};

export default NewTherapistFormContainer;
