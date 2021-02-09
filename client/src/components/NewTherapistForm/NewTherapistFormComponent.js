import React, { useState } from 'react';
import styles from './NewTherapistForm.module.scss';
import { KeyboardDatePicker } from "@material-ui/pickers";
import { Redirect } from 'react-router-dom'
import { RadioButton, RadioGroup } from '@trendmicro/react-radio';
import '@trendmicro/react-radio/dist/react-radio.css';
import classnames from 'classnames';

const categories = [
  {
    name: 'Mums',
    image: 'Mums-walking.jpg',
  },
  {
    name: 'Cheese Addiction',
    image: 'cheese-selection-p313-443_medium.jpg',
  },
]

const NewTherapistForm = ({ createTherapist, redirect }) => {

  const [dateOfBirth, setDateOfBirth] = useState('')
  const [yearsExperience, setYearsExperience] = useState('')
  const [selectedCategories, setSelectedCategories] = useState([])
  const [phone, setPhone] = useState('')
  const [photo, setPhoto] = useState('')

  const selectCategory = (e, category) => {
    e.preventDefault();
    if (isCategorySelected(category)) {
      const filteredCategories = selectedCategories.filter(item => item !== category);
      setSelectedCategories(filteredCategories)
    } else {
      setSelectedCategories([...selectedCategories, category])
    }
  }

  const isCategorySelected = (category) => {
    console.log('here', selectedCategories.includes(category));
    return selectedCategories.includes(category)
  }

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
      )
    })
  }

  const submitTherapist = (e) => {
    e.preventDefault();
    createTherapist({
      dateOfBirth,
      yearsExperience,
      categories: selectedCategories,
      phone,
    }, photo)
  }

  const renderRedirect = () => {
    if (redirect) {
      return <Redirect to='/' />
    }
  }

  return (
    <div className={styles.newTherapistForm}>
      <h2 className={styles.title}>Become A Therapist</h2>
      <div className={styles.formContainer}>
        <form onSubmit={submitTherapist}>
          <div>
            <KeyboardDatePicker
              autoOk
              // variant="inline"
              inputVariant="outlined"
              label="Date Of Birth"
              format="MM/dd/yyyy"
              value={dateOfBirth}
              InputAdornmentProps={{ position: "start" }}
              onChange={date => setDateOfBirth(date)}
            />
          </div>
          <div>
            <input
              onChange={(e) => setYearsExperience(e.target.value)}
              value={yearsExperience}
              placeholder="Years of experience"
            />
          </div>
          <div>
            {renderCategoriesButtons()}
          </div>
          <div>
            <input
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              placeholder="Phone Number"
            />
          </div>

          <div className={styles.photoUploadContainer}>
            <label for="photo">
              Choose a photo:
            </label>
            <input
              onChange={(e) => setPhoto(e.target.files[0])}
              type="file"
              className={styles.photoUpload}
            />
          </div>
          <button className={styles.submitBtn}>Submit</button>
        </form>
      </div>
      {renderRedirect()}
    </div>
  );
};

export default NewTherapistForm;
