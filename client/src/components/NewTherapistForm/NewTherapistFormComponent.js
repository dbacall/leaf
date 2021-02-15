import React, { useState, useRef } from 'react';
import styles from './NewTherapistForm.module.scss';
import { KeyboardDatePicker } from '@material-ui/pickers';
import DatePicker from '../commons/DatePicker/DatePickerContainer';
import { Redirect } from 'react-router-dom';
import classnames from 'classnames';
import UploadIcon from '../../assets/icons/UploadIcon.js';

const categories = [
  {
    name: 'Mums',
    image: 'Mums-walking.jpg',
  },
  {
    name: 'Cheese Addiction',
    image: 'cheese-selection-p313-443_medium.jpg',
  },
];

const NewTherapistForm = ({ createTherapist, redirect }) => {
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [yearsExperience, setYearsExperience] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [phone, setPhone] = useState('');
  const [photo, setPhoto] = useState('');

  const selectCategory = (e, category) => {
    e.preventDefault();
    if (isCategorySelected(category)) {
      const filteredCategories = selectedCategories.filter(
        (item) => item !== category
      );
      setSelectedCategories(filteredCategories);
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const isCategorySelected = (category) => {
    console.log('here', selectedCategories.includes(category));
    return selectedCategories.includes(category);
  };

  const renderCategoriesButtons = () => {
    return categories.map((category, index) => {
      return (
        <button
          checked={category.name === 'Mums'}
          onClick={(e) => selectCategory(e, category.name)}
          className={classnames(styles.categoryBtn, {
            [styles.selectedCategory]: isCategorySelected(category.name),
          })}
        >
          {category.name}
        </button>
      );
    });
  };

  const submitTherapist = (e) => {
    e.preventDefault();
    createTherapist(
      {
        dateOfBirth,
        yearsExperience,
        categories: selectedCategories,
        phone,
      },
      photo
    );
  };

  const renderRedirect = () => {
    if (redirect) {
      return <Redirect to="/" />;
    }
  };

  const hiddenFileInput = useRef(null);

  const handleUpload = (e) => {
    e.preventDefault();
    hiddenFileInput.current.click();
  };

  return (
    <div className={styles.newTherapistForm}>
      <h2 className={styles.title}>Become A Therapist</h2>
      <div className={styles.formContainer}>
        <form onSubmit={submitTherapist}>
          <div>
            <DatePicker setDate={setDateOfBirth} value={dateOfBirth} />
          </div>
          <div>
            <input
              onChange={(e) => setYearsExperience(e.target.value)}
              value={yearsExperience}
              placeholder="Years of experience"
            />
          </div>
          <label>Select categories:</label>

          <div className={styles.categoryBtns}>{renderCategoriesButtons()}</div>
          <div>
            <input
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              placeholder="Phone Number"
            />
          </div>

          <div className={styles.photoUploadContainer}>
            <button onClick={handleUpload}>
              <UploadIcon fill="#37371f" className={styles.uploadIcon} />
              Upload Photo
            </button>
            <input
              onChange={(e) => setPhoto(e.target.files[0])}
              type="file"
              className={styles.photoUpload}
              ref={hiddenFileInput}
            />
            {photo && <p>Photo uploaded!</p>}
          </div>
          <button className={styles.submitBtn}>Submit</button>
        </form>
      </div>
      {renderRedirect()}
    </div>
  );
};

export default NewTherapistForm;
