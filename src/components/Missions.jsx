import { useSelector } from 'react-redux';
import MissionDetails from './MissionDetails';

const Missions = () => {
  const { missions } = useSelector((store) => store.missions);
  return (
    <table>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      {missions.map((mission) => (
        <MissionDetails
          key={mission.mission_id}
          name={mission.mission_name}
          description={mission.description}
          id={mission.mission_id}
          reserved={mission.reserved}
        />
      ))}
    </table>
  );
};

export default Missions;
