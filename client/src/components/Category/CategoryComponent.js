import React from 'react';
import styles from './Category.module.scss';
import { Link } from 'react-router-dom'

const Category = ({ therapists, status }) => {

  const renderTherapists = () => {
    if (status !== 'loading' && Object.keys(therapists).length > 0) {
      return therapists.map((therapist, index) => {
        return (
          <div className={styles.therapist} key={index}>
            <div className={styles.imageContainer}>
              {/* <img className={styles.therapistImage} src={require(`../../assets/images/${therapist.image}`)}></img> */}
            </div>
            <h4 className={styles.therapistName}>{therapist.user[0].firstName} {therapist.user[0].surname}</h4>
          </div>
        )
      })
    }

  }

  return (
    <div className={styles.category}>
      <h2 className={styles.title}>Therapists</h2>
      <div className={styles.therapists}>
        {renderTherapists()}
      </div>
    </div>
  );
};

export default Category;
