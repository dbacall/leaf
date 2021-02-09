import React from 'react';
import styles from './Category.module.scss';
import { Link } from 'react-router-dom'
import Loader from '../commons/Loader'

const Category = ({ therapists, status }) => {

  const renderTherapists = () => {
    if (status === 'loading') {
      return <Loader />
    } else {
      return therapists.map((therapist, index) => {
        return (
          <Link
            to={`/therapist/${therapist.id}`}
            className={styles.therapist}
            key={index}
          >
            <div className={styles.imageContainer}>
              <img className={styles.therapistImage} src={require(`../../../../uploads/${therapist.photo[0].photo}`)}></img>
            </div>
            <h4 className={styles.therapistName}>{therapist.user[0].firstName} {therapist.user[0].surname}</h4>
          </Link>
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