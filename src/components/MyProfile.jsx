import { useSelector } from 'react-redux';
import styles from '../styles/MyProfile.module.css';

const MyProfile = () => {
  const { rockets } = useSelector((store) => store.rockets);
  const bookedRockets = rockets.filter((rocket) => rocket.reserved);
  return (
    <div className={styles.container}>
      <h2>My Rockets</h2>
      <ul>
        {bookedRockets.map((rocket) => (
          <li key={rocket.id}>{rocket.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyProfile;
