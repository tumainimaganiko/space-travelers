import React from 'react';
import styles from '../styles/RocketDetails.module.css';

const RocketDetails = () => (
  <div className={styles.container}>
    <img
      src="https://t3.ftcdn.net/jpg/05/58/59/78/360_F_558597869_9iWHODEeht6tqGHU8O0MsJOVTl2RamFu.jpg"
      className={styles.img}
      alt=""
    />
    <div className={styles.details}>
      <h2>Falcon 1</h2>
      <p>
        The Falcon 1 was an expendable launch system privately developed and
        manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon
        1 became the first privately-developed liquid-fuel launch vehicle to
        go into orbit around the Earth.
      </p>
      <button type="button">Reserve Rocket</button>
    </div>
  </div>
);

export default RocketDetails;
