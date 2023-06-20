import { useDispatch } from 'react-redux';
import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Mission.module.css';
import { joinMission, leaveMission } from '../redux/missions/missionsSlice';

const MissionDetails = ({
  name, description, id, reserved,
}) => {
  const dispatch = useDispatch();
  const [text, setText] = useState('Not a Member');

  const handleJoin = (e) => {
    e.preventDefault();
    dispatch(joinMission(id));
    if (!reserved) {
      setText('Active Member');
    }
  };
  const handleLeave = (e) => {
    e.preventDefault();
    dispatch(leaveMission(id));
    if (reserved) {
      setText('Not a member');
    }
  };
  return (
    <tbody>
      <tr>
        <td className={styles.name}>{name}</td>
        <td className={styles.description}>{description}</td>
        <td>
          <span>{text}</span>
        </td>
        <td>
          {!reserved && (
            <button
              type="button"
              onClick={handleJoin}
            >
              Join Mission
            </button>
          )}
          {reserved && (
            <button
              type="button"
              onClick={handleLeave}
            >
              Leave Mission
            </button>
          )}
        </td>
      </tr>
    </tbody>
    
  );
};

MissionDetails.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  reserved: PropTypes.bool,
};
MissionDetails.defaultProps = {
  reserved: false,
};
export default MissionDetails;
