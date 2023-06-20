import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import RocketDetails from './RocketDetails';
import { fetchRockets } from '../redux/rockets/rocketsSlice';

const Rockets = () => {
  const { rockets } = useSelector((store) => store.rockets);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <div>
      {rockets.map((item) => (
        <RocketDetails
          key={item.id}
          name={item.name}
          description={item.description}
          image={item.flickr_images}
        />
      ))}
    </div>
  );
};

export default Rockets;
