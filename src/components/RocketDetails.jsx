import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/RocketDetails.module.css';

const RocketDetails = ({ name, description, image }) => (
  <div className={styles.container}>
    <div>
    <img
      src={image}
      className={styles.img}
      alt=""
    />
    </div>
    <div className={styles.details}>
      <h2>{name}</h2>
      <p>{description}</p>
      <button type="button">Reserve Rocket</button>
    </div>
  </div>
);

export default RocketDetails;

RocketDetails.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.arrayOf(PropTypes.string).isRequired,
};
