import PropTypes from 'prop-types';
import styles from '../styles/Mission.module.css';

const MissionDetails = ({ name, description }) => (

  <tr>
    <td className={styles.name}>{name}</td>
    <td className={styles.description}>{description}</td>
    <td>
      <button type="button">Not a member</button>
    </td>
    <td>
      <button type="button">Join mission</button>
    </td>
  </tr>
);

MissionDetails.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MissionDetails;
