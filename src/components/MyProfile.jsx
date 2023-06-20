import { useSelector } from 'react-redux';

const MyProfile = () => {
  const { rockets } = useSelector((store) => store.rockets);
  const bookedRockets = rockets.filter((rocket) => rocket.reserved);
  return (
    <table>
      <th>Rockets</th>
      {bookedRockets.map((rocket) => (
        <tr key={rocket.id}>{rocket.name}</tr>
      ))}
    </table>
  );
};

export default MyProfile;
