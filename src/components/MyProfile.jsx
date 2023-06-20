import { useSelector } from 'react-redux';

const MyProfile = () => {
  const { missions } = useSelector((store) => store.missions);
  const bookedMission = missions.filter((mission) => mission.reserved);
  return (
    <ul>
      {
        bookedMission.map((mission) => (
          <li key={mission.mission_id}>{mission.mission_name}</li>
        ))
      }
    </ul>
  );
};

export default MyProfile;
