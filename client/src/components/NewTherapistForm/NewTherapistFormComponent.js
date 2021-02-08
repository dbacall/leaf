import React, { useState } from 'react';
import styles from './NewTherapistForm.module.scss';
import { KeyboardDatePicker } from "@material-ui/pickers";

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

const NewTherapistForm = ({ createTherapist }) => {

  const [dateOfBirth, setDateOfBirth] = useState('')
  const [yearsExperience, setYearsExperience] = useState('')
  const [selectedCategories, setSelectedCategories] = useState([])
  const [phone, setPhone] = useState('')
  const [photo, setPhoto] = useState('')

  const selectCategory = (e, category) => {
    e.preventDefault();
    setSelectedCategories([...selectedCategories, category])
  }

  const renderCategoriesButtons = () => {
    return categories.map((category) => {
      return (
        <button
          value={category.name}
          onClick={(e) => selectCategory(e, category.name)}
          className={styles.categoryBtn}
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
    </div>
  );
};

export default NewTherapistForm;
