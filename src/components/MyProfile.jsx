import { useSelector } from 'react-redux';
import Styles from '../styles/Mission.module.css';
import styles from '../styles/MyProfile.module.css';

const MyProfile = () => {
  const { missions } = useSelector((store) => store.missions);
  const bookedMission = missions.filter((mission) => mission.reserved);
  const { rockets } = useSelector((store) => store.rockets);
  const bookedRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <>
      <table className={Styles.profileTable}>
        <thead>
          <th>My Missions</th>
        </thead>
        <tbody>
          {bookedMission.map((mission) => (
            <tr
              key={mission.mission_id}
              className={Styles.profileRow}
            >
              {mission.mission_name}
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.container}>
        <h2>My Rockets</h2>
        <ul>
          {bookedRockets.map((rocket) => (
            <li key={rocket.id}>{rocket.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MyProfile;
