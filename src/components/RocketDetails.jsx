import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from '../styles/RocketDetails.module.css';
import { bookRocket, cancelRocket } from '../redux/rockets/rocketsSlice';

const RocketDetails = ({
  name, description, image, id, reserved,
}) => {
  const dispatch = useDispatch();

  const [text, setText] = useState('');

  const handleBooking = (e) => {
    e.preventDefault();
    dispatch(bookRocket(id));
    setText('reserved');
  };
  const handleCancelingBooking = (e) => {
    e.preventDefault();
    dispatch(cancelRocket(id));
    setText('');
  };

  return (
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
        <p>
          {reserved && <span>{text}</span>}
          {description}
        </p>
        {!reserved && <button type="button" className={styles.reservedButton} onClick={handleBooking}>Reserve Rocket</button>}
        {reserved && <button type="button" className={styles.cancelledButton} onClick={handleCancelingBooking}>Cancel Reservation</button>}
      </div>
    </div>
  );
};

export default RocketDetails;

RocketDetails.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  reserved: PropTypes.bool,
  image: PropTypes.arrayOf(PropTypes.string).isRequired,
};

RocketDetails.defaultProps = {
  reserved: false,
};
