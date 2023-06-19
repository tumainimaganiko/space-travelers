import React from "react";
import styles from "../styles/RocketDetails.module.css"
import img from "../Images/space-img.png";

const RocketDetails = () => {
  return (
    <div>
      <img src={img} className={styles.img} alt="" />
      <div className="details">
        <h2>Falcon 1</h2>
        <p className="description">
          The Falcon 1 was an expendable launch system privately developed and
          manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon
          1 became the first privately-developed liquid-fuel launch vehicle to
          go into orbit around the Earth."
        </p>
        <button>Reserve Rocket</button>
      </div>
    </div>
  );
};

export default RocketDetails;
