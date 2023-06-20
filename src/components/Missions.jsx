import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import MissionDetails from './MissionDetails';
import { fetchMissions } from '../redux/missions/missionsSlice';

const Missions = () => {
  const dispatch = useDispatch();
  const { missions } = useSelector((store) => store.missions);

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <table>
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
