import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import MissionDetails from './MissionDetails';
import Styles from '../styles/Mission.module.css';

const Missions = () => {
  const { missions } = useSelector((store) => store.missions);

  return (
    <table className={Styles.missionTable}>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {missions.length > 0
          ? missions.map((mission) => (
            <MissionDetails
              key={uuidv4()}
              name={mission.mission_name}
              description={mission.description}
              id={mission.mission_id}
              reserved={mission.reserved}
            />
          ))
          : 'loading'}
      </tbody>
    </table>
  );
};

export default Missions;
