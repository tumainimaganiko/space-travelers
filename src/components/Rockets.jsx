import { useSelector } from 'react-redux';
import RocketDetails from './RocketDetails';

const Rockets = () => {
  const { rockets } = useSelector((store) => store.rockets);

  return (
    <div>
      {rockets.map((item) => (
        <RocketDetails
          key={item.id}
          id={item.id}
          name={item.name}
          description={item.description}
          image={item.flickr_images}
          reserved={item.reserved}
        />
      ))}
    </div>
  );
};

export default Rockets;
