import React, { useState, useRef } from 'react';
import styles from './NewTherapistForm.module.scss';
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

const NewTherapistForm = ({ createTherapist, redirect, errors }) => {
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [yearsExperience, setYearsExperience] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [pricePerHour, setPricePerHour] = useState(null);
  const [photo, setPhoto] = useState(null);

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
        pricePerHour,
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
            <p className={styles.warning}>
              {errors.dateOfBirth && errors.dateOfBirth.message}
            </p>
          </div>
          <div>
            <input
              onChange={(e) => setYearsExperience(e.target.value)}
              value={yearsExperience}
              placeholder="Years of experience"
              className={classnames('', {
                [styles.inputWarning]: errors.yearsExperience,
              })}
            />
            <p className={styles.warning}>
              {errors.yearsExperience && errors.yearsExperience.message}
              {errors.yearsExperience &&
                errors.yearsExperience.reason &&
                `Years of experience must be a number`}
            </p>
          </div>
          <label>Select categories:</label>

          <div className={styles.categoryBtns}>
            {renderCategoriesButtons()}
            <p className={styles.warning}>
              {errors.categories && errors.categories.message}
            </p>
          </div>
          <div>
            <input
              onChange={(e) => setPricePerHour(e.target.value)}
              value={pricePerHour}
              placeholder="Price per hour"
            />
          </div>

          <div className={styles.photoUploadContainer}>
            <button onClick={handleUpload} className={styles.uploadBtn}>
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
