import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

it('Render a Navigation Bar', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
