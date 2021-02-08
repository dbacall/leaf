import React from 'react';
import styles from './home.module.scss';

const url = process.env.REACT_APP_API_URL;

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

const Home = () => {

  const renderCategories = () => {
    return categories.map((category, index) => {
      return (
        <div className={styles.category} key={index}>
          <div className={styles.imageContainer}>
            <img className={styles.categoryImage} src={require(`../../assets/images/${category.image}`)}></img>
          </div>
          <h4 className={styles.categoryName}>{category.name}</h4>
        </div>
      )
    })
  }

  return (
    <div className={styles.home}>
      <h2 className={styles.title}>Categories</h2>
      <div className={styles.categories}>
        {renderCategories()}
      </div>
    </div>
  );
};

export default Home;
