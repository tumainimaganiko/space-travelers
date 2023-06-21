import { useSelector } from 'react-redux';
import Styles from '../styles/Mission.module.css';

const MyProfile = () => {
  const { missions } = useSelector((store) => store.missions);
  const bookedMission = missions.filter((mission) => mission.reserved);

  return (
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
  );
};

export default MyProfile;
