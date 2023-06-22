import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);
function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Layout />}
      >
        <Route
          index
          element={<Rockets />}
        />
        <Route
          path="missions"
          element={<Missions />}
        />
        <Route
          path="myprofile"
          element={<MyProfile />}
        />
      </Route>
    </Routes>
  );
}

export default App;
