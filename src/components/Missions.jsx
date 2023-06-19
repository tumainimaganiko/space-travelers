import styles from '../styles/Navbar.module.css'

const Missions = () => (
  <div className={styles.missionContainer}>
    <table>
      <tr>
        <th>Mission</th>
        <th>Description</th>
        <th>Status</th>
        <th />
      </tr>
      <tr>
        <td>Mission 1</td>
        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur placeat laudantium quos, deserunt corporis aliquam. Fuga cumque similique </td>
        <td>
          {' '}
          <button type="button">Not a member</button>
        </td>
        <td>
          {' '}
          <button type="button">Join mission</button>
        </td>

      </tr>
      <tr>
        <td>Mission 2</td>
        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, beatae labore. Eum illo eveniet, natus odit debitis laborum dignissimos doloribus nulla reiciendis architecto cumque dolore autem laudantium ea nam consequuntur.</td>
        <td>
          {' '}
          <button type="button">Not a member</button>
        </td>
        <td>
          {' '}
          <button type="button">Join mission</button>
        </td>
      </tr>
      <tr>
        <td>Mission 3</td>
        <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptates dolorem, tempore aliquid facilis dolores molestias error temporibus. Cumque mollitia consequatur velit nam quam temporibus voluptatum at, modi doloribus dolorum?</td>
        <td>
          {' '}
          <button type="button">Not a member</button>
        </td>
        <td>
          {' '}
          <button type="button">Join mission</button>
        </td>
      </tr>
    </table>
  </div>
);

export default Missions;
