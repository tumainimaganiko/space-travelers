import styles from '../styles/Mission.module.css';

const Missions = () => (
  <div className={styles.missionContainer}>
    <table>
      <tr>
        <th>Mission</th>
        <th>Description</th>
        <th>Status</th>
      </tr>
      <tr>
        <td className={styles.name}>Thaicom</td>
        <td className={styles.description}>
          Thaicom is the name of a series of communications satellites operated
          from Thailand, and also the name of Thaicom Public Company Limited,
          which is the company that owns and operates the Thaicom satellite
          fleet and other telecommunication businesses in Thailand and
          throughout the Asia-Pacific region. The satellite projects were named
          Thaicom by the King of Thailand, His Majesty the King Bhumibol
          Adulyadej, as a symbol of the linkage between Thailand and modern
          communications technology.
        </td>
        <td>

          <button type="button">Not a member</button>
        </td>
        <td>

          <button type="button">Join mission</button>
        </td>
      </tr>
      <tr>
        <td className={styles.name}>Telstar</td>
        <td className={styles.description}>
          Telstar 19V (Telstar 19 Vantage) is a communication satellite in the
          Telstar series of the Canadian satellite communications company
          Telesat. It was built by Space Systems Loral (MAXAR) and is based on
          the SSL-1300 bus. As of 26 July 2018, Telstar 19V is the heaviest
          commercial communications satellite ever launched, weighing at 7,076
          kg (15,600 lbs) and surpassing the previous record, set by TerreStar-1
          (6,910 kg/15230lbs), launched by Ariane 5ECA on 1 July 2009.
        </td>
        <td>

          <button type="button">Not a member</button>
        </td>
        <td>

          <button type="button">Join mission</button>
        </td>
      </tr>
      <tr>
        <td className={styles.name}>Commercial Resupply Services</td>
        <td className={styles.description}>
          Commercial Resupply Services (CRS) are a series of contracts awarded
          by NASA from 2008–2016 for delivery of cargo and supplies to the
          International Space Station (ISS) on commercially operated spacecraft.
          The first CRS contracts were signed in 2008 and awarded $1.6 billion
          to SpaceX for 12 cargo transport missions and $1.9 billion to Orbital
          Sciences for 8 missions, covering deliveries to 2016. In 2015, NASA
          extended the Phase 1 contracts by ordering an additional three
          resupply flights from SpaceX and one from Orbital Sciences. After
          additional extensions late in 2015, SpaceX is currently scheduled to
          have a total of 20 missions and Orbital 10. SpaceX began flying
          resupply missions in 2012, using Dragon cargo spacecraft launched on
          Falcon 9 rockets from Space Launch Complex 40 at Cape Canaveral Air
          Force Station, Cape Canaveral, Florida. Orbital Sciences began
          deliveries in 2013 using Cygnus spacecraft launched on the Antares
          rocket from Launch Pad 0A at the Mid-Atlantic Regional Spaceport
          (MARS), Wallops Island, Virginia. A second phase of contracts (known
          as CRS2) were solicited and proposed in 2014. They were awarded in
          January 2016 to Orbital ATK, Sierra Nevada Corporation, and SpaceX,
          for cargo transport flights beginning in 2019 and expected to last
          through 2024.
        </td>
        <td>

          <button type="button">Not a member</button>
        </td>
        <td>

          <button type="button">Join mission</button>
        </td>
      </tr>
    </table>
  </div>
);

export default Missions;
