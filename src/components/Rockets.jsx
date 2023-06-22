import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
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
      {
        rockets.length > 0 ? (
          rockets.map((item) => (
            <RocketDetails
              key={uuidv4()}
              id={item.id}
              name={item.name}
              description={item.description}
              image={item.flickr_images}
              reserved={item.reserved}
            />
          ))
        ) : 'loading'
      }
    </div>
  );
};

export default Rockets;
