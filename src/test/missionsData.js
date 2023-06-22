const myMissions = [];
const missions = [
  {
    mission_name: 'Thaicom',
    mission_id: '9D1B7E0',
    manufacturers: ['Orbital ATK'],
    payload_ids: ['Thaicom 6', 'Thaicom 8'],
    wikipedia: 'https://en.wikipedia.org/wiki/Thaicom',
    website: 'http://www.thaicom.net/en/satellites/overview',
    twitter: 'https://twitter.com/thaicomplc',
    description:
      'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
  },
  {
    mission_name: 'Telstar',
    mission_id: 'F4F83DE',
    manufacturers: ['SSL'],
    payload_ids: ['Telstar 19V', 'Telstar 18V'],
    wikipedia: 'https://en.wikipedia.org/wiki/Telesat',
    website: 'https://www.telesat.com/',
    twitter: null,
    description:
      'Telstar 19V (Telstar 19 Vantage) is a communication satellite in the Telstar series of the Canadian satellite communications company Telesat. It was built by Space Systems Loral (MAXAR) and is based on the SSL-1300 bus. As of 26 July 2018, Telstar 19V is the heaviest commercial communications satellite ever launched, weighing at 7,076 kg (15,600 lbs) and surpassing the previous record, set by TerreStar-1 (6,910 kg/15230lbs), launched by Ariane 5ECA on 1 July 2009.',
  },
  {
    mission_name: 'Iridium NEXT',
    mission_id: 'F3364BF',
    manufacturers: ['Orbital ATK'],
    payload_ids: [
      'Iridium NEXT 1',
      'Iridium NEXT 2',
      'Iridium NEXT 3',
      'Iridium NEXT 4',
      'Iridium NEXT 5',
      'Iridium NEXT 6',
      'Iridium NEXT 7',
      'Iridium NEXT 8',
    ],
    wikipedia: 'https://en.wikipedia.org/wiki/Iridium_satellite_constellation',
    website: 'https://www.iridiumnext.com/',
    twitter: 'https://twitter.com/IridiumBoss?lang=en',
    description:
      "In 2017, Iridium began launching Iridium NEXT, a second-generation worldwide network of telecommunications satellites, consisting of 66 active satellites, with another nine in-orbit spares and six on-ground spares. These satellites will incorporate features such as data transmission that were not emphasized in the original design. The constellation will provide L-band data speeds of up to 128 kbit/s to mobile terminals, up to 1.5 Mbit/s to Iridium Pilot marine terminals, and high-speed Ka-band service of up to 8 Mbit/s to fixed/transportable terminals. The next-generation terminals and service are expected to be commercially available by the end of 2018. However, Iridium's proposed use of its next-generation satellites has raised concerns the service will harmfully interfere with GPS devices. The satellites will incorporate a secondary payload for Aireon, a space-qualified ADS-B data receiver. This is for use by air traffic control and, via FlightAware, for use by airlines. A tertiary payload on 58 satellites is a marine AIS ship-tracker receiver, for Canadian company exactEarth Ltd. Iridium can also be used to provide a data link to other satellites in space, enabling command and control of other space assets regardless of the position of ground stations and gateways.",
  },
  {
    mission_name: 'Commercial Resupply Services',
    mission_id: 'EE86F74',
    manufacturers: ['SpaceX'],
    payload_ids: [
      'Dragon Qualification Unit',
      'COTS Demo Flight 1',
      'COTS Demo Flight 2',
      'SpaceX CRS-1',
      'SpaceX CRS-2',
      'SpaceX CRS-3',
      'SpaceX CRS-4',
      'SpaceX CRS-5',
      'SpaceX CRS-6',
      'SpaceX CRS-7',
      'SpaceX CRS-8',
      'SpaceX CRS-9',
      'SpaceX CRS-10',
      'SpaceX CRS-11',
      'SpaceX CRS-12',
      'SpaceX CRS-13',
      'SpaceX CRS-14',
      'SpaceX CRS-15',
    ],
    wikipedia:
      'https://en.wikipedia.org/wiki/Commercial_Resupply_Services#SpaceX',
    website: 'https://www.spacex.com/',
    twitter: 'https://twitter.com/SpaceX',
    description:
      'Commercial Resupply Services (CRS) are a series of contracts awarded by NASA from 2008–2016 for delivery of cargo and supplies to the International Space Station (ISS) on commercially operated spacecraft. The first CRS contracts were signed in 2008 and awarded $1.6 billion to SpaceX for 12 cargo transport missions and $1.9 billion to Orbital Sciences for 8 missions, covering deliveries to 2016. In 2015, NASA extended the Phase 1 contracts by ordering an additional three resupply flights from SpaceX and one from Orbital Sciences. After additional extensions late in 2015, SpaceX is currently scheduled to have a total of 20 missions and Orbital 10. SpaceX began flying resupply missions in 2012, using Dragon cargo spacecraft launched on Falcon 9 rockets from Space Launch Complex 40 at Cape Canaveral Air Force Station, Cape Canaveral, Florida. Orbital Sciences began deliveries in 2013 using Cygnus spacecraft launched on the Antares rocket from Launch Pad 0A at the Mid-Atlantic Regional Spaceport (MARS), Wallops Island, Virginia. A second phase of contracts (known as CRS2) were solicited and proposed in 2014. They were awarded in January 2016 to Orbital ATK, Sierra Nevada Corporation, and SpaceX, for cargo transport flights beginning in 2019 and expected to last through 2024.',
  },
  {
    mission_name: 'SES',
    mission_id: '6C42550',
    manufacturers: ['Orbital ATK', 'Boeing', 'Airbus Defence and Space'],
    payload_ids: ['SES-8', 'SES-9', 'SES-10', 'SES-11', 'SES-16', 'SES-12'],
    wikipedia: 'https://en.wikipedia.org/wiki/SES_S.A.',
    website: 'https://www.ses.com/',
    twitter: 'https://twitter.com/SES_Satellites',
    description:
      'SES S.A. is a communications satellite owner and operator providing video and data connectivity worldwide to broadcasters, content and internet service providers, mobile and fixed network operators, governments and institutions, with a mission to “connect, enable, and enrich”. SES operates more than 50 geostationary orbit satellites and 16 medium Earth orbit satellites. These comprise the well-known European Astra TV satellites, the O3b data satellites and others with names including AMC, Ciel, NSS, Quetzsat, YahSat and SES.',
  },
  {
    mission_name: 'JCSAT',
    mission_id: 'FE3533D',
    manufacturers: ['SSL'],
    payload_ids: ['JCSAT-2B', 'JCSAT-16'],
    wikipedia: 'https://en.wikipedia.org/wiki/JSAT_Corporation',
    website: 'https://www.jsat.net/en/',
    twitter: null,
    description:
      'The JSAT constellation is a communication and broadcasting satellite constellation formerly operated by JSAT Corporation and currently by SKY Perfect JSAT Group. It has become the most important commercial constellation in Japan, and the fifth of the world. It has practically amalgamated all private satellite operators in Japan, with only B-SAT left as a local competitor.',
  },
  {
    mission_name: 'AsiaSat',
    mission_id: '593B499',
    manufacturers: ['SSL'],
    payload_ids: ['AsiaSat 8', 'AsiaSat 6'],
    wikipedia: 'https://en.wikipedia.org/wiki/AsiaSat',
    website: 'https://www.asiasat.com/',
    twitter: 'https://twitter.com/asia_satellite',
    description:
      'Asia Satellite Telecommunications Holdings Limited known as its brand name AsiaSat is a commercial operator of communication spacecraft. AsiaSat is based in Hong Kong but incorporated in Bermuda.',
  },
  {
    mission_name: 'Orbcomm OG2',
    mission_id: 'CE91D46',
    manufacturers: ['Sierra Nevada Corporation'],
    payload_ids: ['Orbcomm-OG2', 'Orbcomm-OG2-M1', 'Orbcomm-OG2-M2'],
    wikipedia: 'https://en.wikipedia.org/wiki/Orbcomm_(satellite)#Orbcomm-OG2',
    website: 'https://www.orbcomm.com/',
    twitter: 'https://twitter.com/orbcomm_inc',
    description:
      'Orbcomm Generation 2 (OG2) second-generation satellites are intended to supplement and eventually replace the current first generation constellation. Eighteen satellites were ordered by 2008—nominally intended to be launched in three groups of six during 2010–2014—and by 2015 have all been launched, on three flights. Orbcomm has options for a further thirty OG2 spacecraft. The satellites were launched by SpaceX on the Falcon 9 launch system. Originally, they were to launch on the smaller Falcon 1e rocket.',
  },
  {
    mission_name: 'ABS',
    mission_id: '2CF444A',
    manufacturers: ['Boeing'],
    payload_ids: ['ABS-3A', 'ABS-3B'],
    wikipedia: 'https://en.wikipedia.org/wiki/ABS_(satellite_operator)',
    website: 'http://www.absatellite.com/',
    twitter: null,
    description:
      'ABS, formerly Asia Broadcast Satellite, is a global satellite operator based in Hong Kong and officially incorporated in Bermuda. Its services include direct-to-home and satellite-to-cable TV distribution, cellular services, and internet services. Operating 6 communication satellites, the satellite fleet currently covers 93% of the world’s population including the Americas, Africa, Asia Pacific, Europe, the Middle East, Russia and Commonwealth of Independent States.',
  },
  {
    mission_name: 'Eutelsat',
    mission_id: 'F7709F2',
    manufacturers: ['Boeing'],
    payload_ids: ['Eutelsat 115 West B', 'Eutelsat 117 West B'],
    wikipedia: 'https://en.wikipedia.org/wiki/Eutelsat',
    website: 'https://www.eutelsat.com/en/home.html#',
    twitter:
      'https://twitter.com/Eutelsat_SA?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor',
    description:
      "Eutelsat S.A. is a European satellite operator. Providing coverage over the entire European continent, the Middle East, Africa, Asia and the Americas, it is the world's third largest satellite operator in terms of revenues.",
  },
];
missions.forEach((item) => {
  myMissions.push({
    id: item.mission_id,
    mission_name: item.mission_name,
    description: item.description,
  });
});

export default myMissions;
