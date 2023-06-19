import React from 'react';
import styles from '../styles/RocketDetails.module.css';

const RocketDetails = ({ name, description, image }) => (
  <div className={styles.container}>
    <img
      src={image}
      className={styles.img}
      alt=""
    />
    <div className={styles.details}>
      <h2>{name}</h2>
      <p>{description}</p>
      <button type="button">Reserve Rocket</button>
    </div>
  </div>
);

export default RocketDetails;
