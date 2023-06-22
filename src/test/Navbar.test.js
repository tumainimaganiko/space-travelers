import renderer from 'react-test-renderer';
import Navbar from '../components/Navbar.jsx';
import { MemoryRouter } from 'react-router-dom';

it('Render a Navigation Bar', () => {
    const tree = renderer.create(
        <MemoryRouter>
            <Navbar/>
        </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
})