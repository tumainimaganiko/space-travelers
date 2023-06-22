import { NavLink } from 'react-router-dom';
import Img from '../Images/space-img.png';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const imgStyle = {
    width: '40px',
    height: '40px',
  };

  const activeLink = {
    textDecoration: 'underline',
    color: 'blue',
    fontWeight: '500',
  }

  const link = {
    textDecoration: 'none',
    color: 'blue',
    fontWeight: '500',
  }
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <img
          src={Img}
          style={imgStyle}
          alt="space logo"
        />
        <h1>Space Travelers&apos; Hub</h1>
      </div>
      <ul className={styles.list}>
        <li>
          <NavLink
            to="/" 
            style={({isActive}) => isActive ? activeLink : link}
          >
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink
            to="missions"
            style={({isActive}) => isActive ? activeLink : link}
          >
            Missions
          </NavLink>
        </li>
        <li>
          <NavLink
            to="myprofile"
            style={({isActive}) => isActive ? activeLink : link}
          >
            My profile
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
