import { useDispatch } from 'react-redux';
import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Mission.module.css';
import { joinMission, leaveMission } from '../redux/missions/missionsSlice';

const MissionDetails = ({
  name, description, id, reserved,
}) => {
  const myStatus = {
    backgroundColor: reserved ? '#379cf6' : '#36454F',
    display: 'block',
    width: '120px',
    border: '1px solid gray',
    color: 'white',
    alignSelf: 'center',
  };
  const styleRow = {
    backgroundColor: reserved ? 'white' : '#E5E4E2',
  };

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
    <tr style={styleRow}>
      <td className={styles.name}>{name}</td>
      <td className={styles.description}>{description}</td>
      <td>
        <span style={myStatus}>
          {' '}
          {text}
        </span>
      </td>
      <td>
        {!reserved && (
          <button
            type="button"
            className={styles.joinBtn}
            onClick={handleJoin}
          >
            Join Mission
          </button>
        )}
        {reserved && (
          <button
            type="button"
            className={styles.leaveBtn}
            onClick={handleLeave}
          >
            Leave Mission
          </button>
        )}
      </td>
    </tr>
  );
};

MissionDetails.propTypes = PropTypes.shape({
  name: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
  reserved: PropTypes.bool,
}).isRequired;

MissionDetails.defaultProps = {
  reserved: false,
};
export default MissionDetails;
