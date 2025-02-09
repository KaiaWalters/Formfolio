import ResponsiveAppBar from './components/Appbar';
import { Outlet, Route, Routes } from 'react-router';
import AdminHomePage from './pages/Admin';
import HomePage from './pages/Home'
import './App.css'
import LandingPage from './pages/Landing';

const Layout = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Outlet />
    </>
  );
};

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="/admin" element={<AdminHomePage />} />
          <Route path="/home" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
