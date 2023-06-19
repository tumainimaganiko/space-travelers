import { NavLink } from "react-router-dom";
import Img from '../Images/space-img.png'
const Navbar = () => {
    return (
      <div>
          <div className="heading">
              <img src={Img} alt="space logo" />
              <h1>Space Travelers' Hub</h1>
          </div>
          <ul>
              <li><NavLink to="/">Rockets</NavLink></li>
              <li><NavLink to="missions">Missions</NavLink></li>
              <li><NavLink to="myprofile">My profile</NavLink></li>
          </ul>
      </div>
    )
  }
  
  export default Navbar;