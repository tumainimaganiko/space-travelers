import { useSelector } from 'react-redux';

const MyProfile = () => {
  const { rockets } = useSelector((store) => store.rockets);
  const bookedRockets = rockets.filter((rocket) => rocket.reserved);
  return (
    <ul>
      {bookedRockets.map((rocket) => (
        <li key={rocket.id}>{rocket.name}</li>
      ))}
    </ul>
  );
};

export default MyProfile;
