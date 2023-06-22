import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { fetchMissions } from '../redux/missions/missionsSlice';
import MissionDetails from './MissionDetails';
import Styles from '../styles/Mission.module.css';

const Missions = () => {
  const { missions } = useSelector((store) => store.missions);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

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
        {missions.map((mission) => (
          <MissionDetails
            key={uuidv4()}
            name={mission.mission_name}
            description={mission.description}
            id={mission.mission_id}
            reserved={mission.reserved}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Missions;
