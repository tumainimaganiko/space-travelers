import { useSelector } from 'react-redux';
import Styles from '../styles/Mission.module.css';
import styles from '../styles/MyProfile.module.css';

const MyProfile = () => {
  const { missions } = useSelector((store) => store.missions);
  const bookedMission = missions.filter((mission) => mission.reserved);
  const { rockets } = useSelector((store) => store.rockets);
  const bookedRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <div className={styles.container}>
      <div className={styles.missions}>
        <h2>My Missions</h2>
        <ul>
          {bookedMission.map((mission) => (
            <li key={mission.mission_id} className={Styles.profileRow}>
              {mission.mission_name}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.rockets}>
        <h2>My Rockets</h2>
        <ul>
          {bookedRockets.map((rocket) => (
            <li key={rocket.id}>{rocket.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyProfile;
