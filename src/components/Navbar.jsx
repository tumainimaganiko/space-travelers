import { NavLink } from 'react-router-dom';
import Img from '../Images/space-img.png';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const imgStyle = {
    width: '20px',
    height: '20px',
  };
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <img src={Img} style={imgStyle} alt="space logo" />
        <h1>Space Travelers&apos; Hub</h1>
      </div>
      <ul className={styles.list}>
        <li><NavLink to="/">Rockets</NavLink></li>
        <li><NavLink to="missions">Missions</NavLink></li>
        <li><NavLink to="myprofile">My profile</NavLink></li>
      </ul>
    </div>
  );
};

export default Navbar;
