import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';
import { fetchMissions } from './redux/missions/missionsSlice';
import { fetchRockets } from './redux/rockets/rocketsSlice';

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
    dispatch(fetchRockets());
  }, [dispatch]);
  
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
